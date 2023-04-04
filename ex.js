if (current.isToggle) {
  // navbar 외부 클릭 시 (navbar를 닫아야 함)
  if (
    e.target !== toggleButton &&
    !toggleButton.contains(e.target) &&
    e.target !== navButton &&
    !navButton.contains(e.target)
  ) {
    setNavToggle({ isToggle: false, stateName: 'toggle' });
  }

  // 토글 버튼 클릭 시 (navbar를 닫아야 함)
  if (toggleButton.contains(e.target)) {
    setNavToggle({ isToggle: false, stateName: 'toggle' });
  }

  return;
}

// 토글이 안 되어 있는 상황일 때(=navbar가 닫혀 있는 상황일 때)
if (!current.isToggle) {
  if (toggleButton.contains(e.target)) {
    setNavToggle({ isToggle: true, stateName: 'toggle' });
  }
  return;
}
