'use strict';

//======notification======//
///////////////////////////

const notifiacation = document.querySelector('.notifiacation');
const got_it = document.querySelector('.notifiacation_button');

got_it.addEventListener('click', function () {
  notifiacation.classList.add('notifiacation_hidden');
});

// /////////////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// ///////////////////////////////////////
// // Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// vbvvbvv
const dropDownMenuIcon = document.querySelector('.dropDownMenuIcon');
const dropDownMenu = document.querySelector('.dropDownMenu');
const removeDropDown_icon = document.querySelector('.removeDropDown_icon');

const dropDownMenuIcon_faBars = document.querySelector(
  '.dropDownMenuIcon_faBars'
);

// console.log(dropDownMenuIcon_faBars);
dropDownMenuIcon_faBars.addEventListener('click', function (e) {
  // console.log('mk');
  dropDownMenu.classList.remove('active_display');
  dropDownMenuIcon.classList.add('active_display');
  removeDropDown_icon.classList.remove('active_display');
});

removeDropDown_icon.addEventListener('click', function () {
  // removeDropDown_icon.classList.add('active_display');
  dropDownMenu.classList.add('active_display');
  dropDownMenuIcon.classList.remove('active_display');
  removeDropDown_icon.classList.add('active_display');
});
