import { useState } from "react";
import { format, isSameDay, isBefore, startOfDay } from "date-fns";
import css from "./style.module.css";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";

const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const Calendar = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const today = startOfDay(new Date());

  const toggleCalendar = () => setIsOpen((prev) => !prev);

  const handleDateSelect = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (isBefore(startOfDay(date), today)) return;
    onChange(date);
    setIsOpen(false);
  };

  const prevMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() - 1);
    setCurrentMonth(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + 1);
    setCurrentMonth(newDate);
  };

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay() || 7;

  return (
    <div className={css.calendarCont}>
      <div onClick={toggleCalendar} className={css.inputBox}>
        <p>
          {value ? (
            format(value, "dd.MM.yyyy")
          ) : (
            <span className={css.inputSpan}>Booking date</span>
          )}
        </p>
        <Icon
          iconName={"icon-calendar"}
          width={"20"}
          height={"20"}
          stroke="#101828"
          fill="transparent"
        />
      </div>

      {isOpen && (
        <div className={css.popup}>
          <div className={css.header}>
            <Button onClick={prevMonth} className={css.navBtn}>◀</Button>
            <span className={css.monthLabel}>
              {format(currentMonth, "LLLL yyyy")}
            </span>
            <Button onClick={nextMonth} className={css.navBtn}>▶</Button>
          </div>

          <div className={css.weekDays}>
            {daysOfWeek.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          <div className={css.daysGrid}>
            {[...Array(firstDay - 1)].map((_, i) => (
              <div key={`empty-${i}`} />
            ))}

            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

              const isSelected =
                value &&
                isSameDay(value, date);

              const isToday = isSameDay(date, today);
              const isDisabled = isBefore(startOfDay(date), today);

              return (
                <div
                  key={day}
                  onClick={() => !isDisabled && handleDateSelect(day)}
                  className={`${css.day} 
                    ${isSelected ? css.selected : ""} 
                    ${isToday ? css.today : ""} 
                    ${isDisabled ? css.disabled : ""}`}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
