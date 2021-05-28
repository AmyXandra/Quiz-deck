import * as React from 'react';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
import Header from './Header';
import { Button } from "@progress/kendo-react-buttons";


const items = [{
  text: <a href='/create' className="k-button k-button-outline k-primary"><span className="k-icon k-i-plus"></span> New Quiz</a>,
},
{
  text: 'My Quizes',
  icon: 'k-i-book',
  selected: true
},
{
  text: 'Profile',
  icon: 'k-i-user'
},
{
  text: 'Log Out',
  icon: 'k-i-calendar'
}];

export default function Sidenav(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(items.findIndex(x => x.selected === true));


  const handleSelect = ev => {
    setSelectedId(ev.itemIndex);
    setExpanded(false);
  };


  const [mode, setMode] = React.useState(true);
  // const [selectedId, setSelectedId] = React.useState(
  //   items.findIndex((x) => x.selected === true)
  // );
  // let expandMode = mode ? "overlay" : "push";
  const [expandMode, setExpandMode] = React.useState('push');

  const handleClick = () => {
    setExpanded((prevState) => !prevState);
    setExpandMode('overlay')
  };

  const handleChange = () => {
    setMode((prevState) => !prevState);
  };



  return (

    <div>
      <Header>
        <Button className="mobile-menu" icon="menu" look="flat" onClick={handleClick} />
      </Header>

      <div className="menu-items-mobile">
        <Drawer expanded={expanded} position={'start'} mode={'overlay'} items={items.map((item, index) => ({
          ...item,
          selected: index === selectedId
        }))}onOverlayClick={handleClick} onSelect={handleSelect}>
        
          <DrawerContent>

            {props.children}

          </DrawerContent>
        </Drawer>
      </div>
      
      <div className="menu-items-desktop">
        <Drawer expanded={true} position={'start'} mode={'push'} items={items.map((item, index) => ({
          ...item,
          selected: index === selectedId
        }))}onOverlayClick={handleClick} onSelect={handleSelect}>
        
          <DrawerContent>

            {props.children}

          </DrawerContent>
        </Drawer>
      </div>
    </div>)
};

