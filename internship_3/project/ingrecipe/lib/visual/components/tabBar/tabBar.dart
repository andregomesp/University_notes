import 'individualTab.dart';

import 'package:flutter/material.dart';

TabBar getTabBar() {
  List tabNames = ["search", "favorite"];
    return TabBar(tabs: List<Widget>.generate(
      tabNames.length,
      (i) => IndividualTab(
        tabNames[i]
      )
    )
  );
}

List<Widget> getTabs() {

  List<Widget> targetTabs = [];
  for (String tabName in tabNames) {
    Widget tab = IndividualTab(tabName: tabName);
    targetTabs.add(tab);
  } 
  return targetTabs;
}