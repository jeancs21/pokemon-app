import React, { useState } from 'react';
import { Bars3Icon, UserIcon } from '@heroicons/react/20/solid';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

interface MenuItem {
  title: string;
  url: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const userLogged = useSelector((store: AppStore) => store.user)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex justify-between bg-red-600 p-4 ${isOpen ? 'flex-col items-start' : ''}`}>
      <Bars3Icon className={`block md:hidden fill-white cursor-pointer w-6 h-6 ${isOpen ? '' : ''}`} onClick={toggleMenu} />
      <ul className={`list-none flex mt-4 md:mt-0 p-0 text-white ${isOpen ? 'flex-col items-start' : 'hidden md:flex'}`}>
        {items.map((item, index) => (
          <li key={index} className={`mr-12 md:my-0 ${isOpen ? 'my-2' : ''} hover:text-slate-300 duration-300 font-medium`}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      {
        userLogged && (
        <div className="flex gap-4">
          <UserIcon className="w-6 h-6" />
          <p className="font-medium">{userLogged.username}</p>
        </div>
        )
      }
    </div>
  );
};

export default Menu;