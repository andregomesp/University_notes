import 'package:flutter/material.dart';

class IndividualTab extends StatelessWidget {
  final String tabName;
  const IndividualTab({Key key, this.tabName}) : super(key: key);
  Widget build (BuildContext buildContext) {
    return Tab(icon: Icon(getIcon(tabName)));
  }
}

IconData getIcon(tabName) {
  Map icons = new Map();
  icons["search"] = Icons.search;
  icons["favorite"] = Icons.favorite;
  return icons[tabName];
}