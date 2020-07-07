import React from "react";
import { Button } from "react-native";

export const ButtonPurple = ({ onPress, title }) => {
  return <Button onPress={onPress} title={title} color="#841584" />;
};

export const ButtonRed = ({ onPress, title, color = "red" }) => {
  return <Button onPress={onPress} title={title} color={color} />;
};

export const ButtonBlue = ({ onPress, title, color = "blue" }) => {
  return <Button onPress={onPress} title={title} color={color} />;
};
