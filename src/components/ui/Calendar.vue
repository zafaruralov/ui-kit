<template>
  <div class="calendar-container">
    <h2 class="calendar-title">Календарь</h2>

    <!-- Date input field -->
    <div class="date-input-group">
      <input type="text" placeholder="Выберите дату" class="date-input" v-model="selectedDateInput" readonly />
      <CalendarIcon class="input-icon" />
    </div>

    <!-- Date picker with navigation -->
    <div class="date-picker">
      <button class="nav-button" @click="previousDate">
        <ChevronLeft />
      </button>
      <span class="current-date">{{ formatSelectedDate }}</span>
      <button class="nav-button" @click="nextDate">
        <ChevronRight />
      </button>
    </div>

    <!-- Additional date inputs -->
    <div class="date-input-group">
      <input type="text" class="date-input" v-model="additionalDate1" readonly />
      <CalendarIcon class="input-icon" />
    </div>

    <div class="date-input-group">
      <input type="text" class="date-input" v-model="additionalDate2" readonly />
      <CalendarIcon class="input-icon" />
    </div>

    <!-- Calendar widget -->
    <div class="calendar-widget">
      <div class="calendar-header">
        <button class="nav-button" @click="previousMonth">
          <ChevronLeft />
        </button>
        <h3 class="month-year">{{ currentMonthYear }}</h3>
        <button class="nav-button" @click="nextMonth">
          <ChevronRight />
        </button>
      </div>

      <div class="calendar-grid">
        <div class="day-headers">
          <div v-for="day in dayHeaders" :key="day" class="day-header">{{ day }}</div>
        </div>

        <div class="dates-grid">
          <button
            v-for="date in calendarDates"
            :key="`${date.month}-${date.day}`"
            class="date-cell"
            :class="{
              'other-month': date.isOtherMonth,
              selected: date.isSelected,
              highlighted: date.isHighlighted
            }"
            @click="selectDate(date)"
          >
            {{ date.day }}
          </button>
        </div>
      </div>

      <div class="calendar-actions">
        <button class="cancel-button" @click="cancel">Отменить</button>
        <button class="save-button" @click="save">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const currentDate = ref(new Date());
const selectedDate = ref(new Date(2025, 0, 1)); // January 1, 2025
const highlightedDate = ref(new Date(2025, 0, 4)); // January 4, 2025

const selectedDateInput = ref("09.09.2025");
const additionalDate1 = ref("09.09.2025");
const additionalDate2 = ref("09.09.2025");

const dayHeaders = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

const currentMonthYear = computed(() => {
  return `${monthNames[currentDate.value.getMonth()]} ${currentDate.value.getFullYear()}`;
});

const formatSelectedDate = computed(() => {
  const day = selectedDate.value.getDate().toString().padStart(2, "0");
  const month = (selectedDate.value.getMonth() + 1).toString().padStart(2, "0");
  const year = selectedDate.value.getFullYear();
  return `${day}.${month}.${year}`;
});

const calendarDates = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Get first Monday of the calendar view
  const startDate = new Date(firstDay);
  const dayOfWeek = (firstDay.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
  startDate.setDate(firstDay.getDate() - dayOfWeek);

  const dates = [];
  const current = new Date(startDate);

  // Generate 6 weeks of dates
  for (let i = 0; i < 42; i++) {
    const isOtherMonth = current.getMonth() !== month;
    const isSelected = isSameDate(current, selectedDate.value);
    const isHighlighted = isSameDate(current, highlightedDate.value);

    dates.push({
      day: current.getDate(),
      month: current.getMonth(),
      year: current.getFullYear(),
      date: new Date(current),
      isOtherMonth,
      isSelected,
      isHighlighted
    });

    current.setDate(current.getDate() + 1);
  }

  return dates;
});

function isSameDate(date1, date2) {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function previousMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
}

function nextMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
}

function previousDate() {
  const newDate = new Date(selectedDate.value);
  newDate.setDate(newDate.getDate() - 1);
  selectedDate.value = newDate;
}

function nextDate() {
  const newDate = new Date(selectedDate.value);
  newDate.setDate(newDate.getDate() + 1);
  selectedDate.value = newDate;
}

function selectDate(date) {
  if (!date.isOtherMonth) {
    selectedDate.value = new Date(date.date);
  }
}

function cancel() {
  console.log("Cancel clicked");
}

function save() {
  console.log("Save clicked");
}

onMounted(() => {
  // Set initial date to January 2025
  currentDate.value = new Date(2025, 0, 1);
});
</script>

<style lang="scss" scoped>
.calendar-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background: #f8f9fa;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.calendar-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  margin-top: 0;
}

.date-input-group {
  position: relative;
  margin-bottom: 16px;

  .date-input {
    width: 100%;
    padding: 12px 16px;
    padding-right: 40px;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    background: white;
    font-size: 14px;
    color: #333;
    box-sizing: border-box;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      outline: none;
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
    }
  }

  .input-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    color: #6b7280;
  }
}

.date-picker {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;

  .nav-button {
    background: #2563eb;
    border: none;
    border-radius: 6px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;

    &:hover {
      background: #1d4ed8;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .current-date {
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
}

.calendar-widget {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .nav-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    color: #6b7280;

    &:hover {
      background: #f3f4f6;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .month-year {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    margin: 0;
  }
}

.calendar-grid {
  .day-headers {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 8px;

    .day-header {
      text-align: center;
      font-size: 12px;
      font-weight: 500;
      color: #6b7280;
      padding: 8px 4px;
    }
  }

  .dates-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;

    .date-cell {
      aspect-ratio: 1;
      border: none;
      background: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #333;
      transition: all 0.2s;

      &:hover {
        background: #f3f4f6;
      }

      &.other-month {
        color: #d1d5db;
      }

      &.selected {
        background: #2563eb;
        color: white;

        &:hover {
          background: #1d4ed8;
        }
      }

      &.highlighted {
        border: 2px solid #2563eb;
        color: #2563eb;
        font-weight: 600;
      }
    }
  }
}

.calendar-actions {
  display: flex;
  gap: 12px;
  margin-top: 20px;

  button {
    flex: 1;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
  }

  .cancel-button {
    background: white;
    border: 1px solid #e1e5e9;
    color: #6b7280;

    &:hover {
      background: #f9fafb;
      border-color: #d1d5db;
    }
  }

  .save-button {
    background: #2563eb;
    border: 1px solid #2563eb;
    color: white;

    &:hover {
      background: #1d4ed8;
      border-color: #1d4ed8;
    }
  }
}
</style>
