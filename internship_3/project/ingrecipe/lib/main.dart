import 'package:flutter/material.dart';
import 'visual/screens/mainScreen/mainScreen.dart';
void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
}


Widget screenSelector(screen) {
  Widget widget;
  switch (screen) {
    case "logo":
      break;
    case "mainScreen":
    widget = MainScreen();
    break;
    default:
  }
  return widget;
}