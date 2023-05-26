import '../App.css'
import Dropdown from '../components/Dropdown';
import Content from '../components/Content';
import { tagalogCuisine, bisayaCuisine, maranaoCuisine } from '../data/Cuisine';
import { useState } from 'react';
import { Food } from '../data/Cuisine';
import SearchBar from '../components/SearchBar';

function Menu() {

  const [activeMenus, setActiveMenus] = useState({
    'tagalog': false,
    'bisaya': false,
    'maranao': false,
  })

  const [currentContentData, setCurrentContentData] = useState<'none' | Food>('none')

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

  const passDataToContent = (data: Food) => {
    setCurrentContentData(data)
  }

  return (
    <main className='w-screen h-screen flex flex-row max-w-full overflow-hidden'>
      <nav className='flex flex-col gap-10 w-1/4 bg-[#CCD5AE] pt-5 grow'>
        <Dropdown 
          cuisine_name={"Tagalog"} 
          cuisine={tagalogCuisine} 
          active={activeMenus.tagalog} 
          toggle={() => toggleMenu('Tagalog')}
          pass={passDataToContent}
        />
        <Dropdown 
          cuisine_name={"Bisaya"} 
          cuisine={bisayaCuisine} 
          active={activeMenus.bisaya} 
          toggle={() => toggleMenu('Bisaya')}
          pass={passDataToContent}
        />
        <Dropdown 
          cuisine_name={"Maranao"} 
          cuisine={maranaoCuisine} 
          active={activeMenus.maranao} 
          toggle={() => toggleMenu('Maranao')}
          pass={passDataToContent}
        />
        <SearchBar pass={passDataToContent} />
      </nav>
      <section className='w-full overflow-y-scroll'>
        <Content render={currentContentData} />
      </section>
    </main>
  )
}

export default Menu;