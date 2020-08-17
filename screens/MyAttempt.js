import React, { useState } from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

function myAttempt(props) {
  const [dateSelected, setDateSelected] = useState(0);

  return (
    <View>
      <Text>Sell what you dont need</Text>
      <Text>Sell what you dont need</Text>
      <Text>Date Selected: {dateSelected}</Text>

      <CalendarList
        // Enable horizontal scrolling, default = false
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.
        //   calendarWidth={350}

        current={"2020-08-16"}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={"2020-06-10"}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={"2021-05-30"}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={12}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log("selected day", day);
          setDateSelected(day.dateString);
        }}
        markedDates={{
          "2020-05-16": { selected: true, marked: true, selectedColor: "blue" },
          "2020-03-01": { marked: true },
          "2020-03-05": { marked: true, dotColor: "red", activeOpacity: 0 },
          "2020-03-06": { disabled: true, disableTouchEvent: true },
          "2020-03-07": { textColor: "green" },
          "2020-03-22": { startingDay: true, color: "green" },
          "2020-03-23": {
            selected: true,
            endingDay: true,
            color: "green",
            textColor: "gray",
          },
        }}
        í
      />
    </View>
  );
}

const styles = StyleSheet.create({
  newstyle: {
    width: "50%",
  },
});

export default myAttempt;
