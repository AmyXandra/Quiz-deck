import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { Drawer, DrawerContent } from '@progress/kendo-react-layout';
// import './styles.css';
const items = [{
  text: 'Inbox',
  icon: 'k-i-inbox',
  selected: true
}, {
  separator: true
}, {
  text: 'Notifications',
  icon: 'k-i-bell'
}, {
  text: 'Calendar',
  icon: 'k-i-calendar'
}, {
  separator: true
}, {
  text: 'Attachments',
  icon: 'k-i-hyperlink-email'
}, {
  text: 'Favourites',
  icon: 'k-i-star-outline'
}];

export default function Sidenav(props) {
  const [expanded, setExpanded] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState(items.findIndex(x => x.selected === true));

  // const handleClick = () => {
  //   setExpanded(prevState => !prevState);
  // };

  const handleSelect = ev => {
    setSelectedId(ev.itemIndex);
    setExpanded(false);
  };

  return <div>
        <Drawer expanded={expanded} position={'start'} mode={'push'} mini={true} items={items.map((item, index) => ({ ...item,
      selected: index === selectedId
    }))} onSelect={handleSelect}>
          <DrawerContent>
            {/* <button className="k-button" onClick={handleClick}>Toggle the drawer state</button> */}
            {props.children}
          </DrawerContent>
        </Drawer>
      </div>;
};

