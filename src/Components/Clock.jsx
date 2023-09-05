import  { useEffect } from 'react';
import "../Styles/Clock.css";

function Clock() {
  const labels = Array.from({ length: 12 }, (_, i) => i + 1);

  useEffect(() => {
    const updateTime = () => {
      // Get current time and calculate degrees for clock hands
      let date = new Date(),
        secToDeg = (date.getSeconds() / 60) * 360,
        minToDeg = (date.getMinutes() / 60) * 360,
        hrToDeg = (date.getHours() / 12) * 360;

      // Rotate the clock hands to the appropriate degree based on the current time
      document.querySelector(".second").style.transform = `rotate(${secToDeg}deg)`;
      document.querySelector(".minute").style.transform = `rotate(${minToDeg}deg)`;
      document.querySelector(".hour").style.transform = `rotate(${hrToDeg}deg)`;
    };

    // Call updateTime to set clock hands every second
    const intervalId = setInterval(updateTime, 1000);

    // Call updateTime function on page load
    updateTime();

    // Clean up interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock-body">
      <div className="clock-container">
        <div className="clock">
          {labels.map((label) => (
            <label key={label} style={{ '--i': label }}>
              <span>{label}</span>
            </label>
          ))}

          <div className="indicator">
            <span className="hand hour"></span>
            <span className="hand minute"></span>
            <span className="hand second"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
