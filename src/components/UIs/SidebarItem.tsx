import styled from 'styled-components';

interface Props {
  menu: any;
  isActive: boolean;
}

function ActiveSidebarItem({ menu, isActive }: Props) {
  return isActive === true ? (
    <S.ActiveSidebarItem>
      <p>{menu.name}</p>
    </S.ActiveSidebarItem>
  ) : (
    <p>{menu.name}</p>
  );
}

const S = {
  ActiveSidebarItem: styled.div`
    border: 1px solid black;
  `,
  SiderbarItem: styled.div`
    border: 1px none;
  `,
};

export default ActiveSidebarItem;
