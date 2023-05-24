import '../App.css'
import Dropdown from '../components/Dropdown';
import Content from '../components/Content';
import { tagalogCuisine, bisayaCuisine, maranaoCuisine } from '../data/Cuisine';
import { useState } from 'react';

function Menu() {
  // two components: dropdowns & content page
    // dropdowns will have attributes like: cuisine name, and cuisine options (for dropdown)
      // each cuisine option will have their own content page

  /* TO-DO */
  // find different recipes for each cuisine (at least 4)
    // work on content page (when clicking on dropdown item it will show the content)

  const [activeMenus, setActiveMenus] = useState({
    'tagalog': false,
    'bisaya': false,
    'maranao': false,
  })

  const toggleMenu = (menu_name: string) => {
    switch(menu_name) {
      case 'Tagalog': 
        setActiveMenus({
          'tagalog': !activeMenus.tagalog,
          'bisaya': false,
          'maranao': false
        })
        break;
      case 'Bisaya':
        setActiveMenus({
          'tagalog': false,
          'bisaya': !activeMenus.bisaya,
          'maranao': false
        })
        break;
      case 'Maranao':
        setActiveMenus({
          'tagalog': false,
          'bisaya': false,
          'maranao': !activeMenus.maranao
        })
    }
  }

  return (
    <main className='w-screen h-screen flex flex-row'>
      <nav className='flex flex-col gap-10 w-1/4 bg-[#CCD5AE] pt-5'>
        <Dropdown 
          cuisine_name={"Tagalog"} 
          cuisine={tagalogCuisine} 
          active={activeMenus.tagalog} 
          toggle={() => toggleMenu('Tagalog')}
        />
        <Dropdown 
          cuisine_name={"Bisaya"} 
          cuisine={bisayaCuisine} 
          active={activeMenus.bisaya} 
          toggle={() => toggleMenu('Bisaya')}
        />
        <Dropdown 
          cuisine_name={"Maranao"} 
          cuisine={maranaoCuisine} 
          active={activeMenus.maranao} 
          toggle={() => toggleMenu('Maranao')}
        />
      </nav>
      <section></section>
    </main>
  )
}

export default Menu;