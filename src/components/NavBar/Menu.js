import { Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Menu', 'sub4', [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const onClick = (e) => {
  console.log('click', e);
};

const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 256,
    }}
    mode="vertical"
    items={items}
  />
);

export default App;