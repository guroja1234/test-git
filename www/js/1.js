        function calculate() {
            var date = new Date();

            document.getElementById("date").innerHTML = getCurrentDate(date);
            document.getElementById("time").innerHTML = getCurrentTime(date);
        }

        function getCurrentTime(date) {
            var hour = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            var meridiem = "PM";

            if (hour >= 12)
                hour = (hour % 12 == 0) ? 12 : hour % 12;
            else
                meridiem = "AM";

            hour += " " + meridiem;

            return hour + " : " + min + " : " + sec;
        }

        function getCurrentDate(date) {
            var dayOfWeek = getDayOfWeek(date.getDay());
            var dayOfMonth = date.getDate() + getOrdinal(date.getDate());
            var monthOfYear = getMonthOfYear(date.getMonth());
            var year = date.getFullYear();

            return dayOfWeek + ", " + dayOfMonth + " " + monthOfYear + " " + year;
        }

        function getDayOfWeek(n) {
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            return days[n];
        }

        function getMonthOfYear(n) {
            var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

            return months[n];
        }

        function getOrdinal(n) {
            var suffix = "th";

            if (n <= 10 || n >= 20) {
                switch (n % 10) {
                    case 1:
                        suffix = "st";
                        break;
                    case 2:
                        suffix = "nd";
                        break;
                    case 3:
                        suffix = "rd";
                        break;
                    default:
                        break;
                }
            }

            return suffix;
        }
   