import React from 'react';
import Link from 'next/link';
import OnboardingButton from '../button/onboard-button';

import { useEagerConnect } from '../../hooks'
import { orgsHome } from '../../data/org-data';

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector('.dropdown-list').classList.toggle('show');
  };

  const triedToEagerConnect = useEagerConnect()

  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </li>
      <li className='dropdown'>
        <Link href='/causes'>
          <>
            <a>Organizations</a>
            <button
              aria-label='dropdown toggler'
              onClick={handleDropdownStatus}
            >
              <i className='fa fa-angle-down'></i>
            </button>
          </>
        </Link>
        <ul className='dropdown-list'>
          {
            orgsHome.map(
              (
                {shortenedTitle, link},
                index
              ) => (
                <li key={`nav-causes-key-${index}`}>
                <Link href={link}>
                  <a>{shortenedTitle}</a>
                </Link>
              </li>
              )
            )
          }
        </ul>
      </li>
      <li>
        <Link href='/events'>
          <a>Events</a>
        </Link>
      </li>
      <li>
        <a href='https://t.me/GoFundPeaceBot' target='_blank'>Help</a>
      </li>
      {/* <li>
        <Link href='/blogs'>
          <a>Blog</a>
        </Link>
      </li> */}
      <li>
        <OnboardingButton triedToEagerConnect={triedToEagerConnect} />
      </li>
    </ul>
  );
};

export default NavLinks;
