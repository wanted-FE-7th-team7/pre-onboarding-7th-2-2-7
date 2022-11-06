import styled from 'styled-components';

interface Props {
  menu: any;
  isActive: boolean;
}

function ActiveSidebarItem({ menu, isActive }: Props) {
  return isActive === true ? (
    <S.SidebarItem>
      <p className="active">{menu.name}</p>
    </S.SidebarItem>
  ) : (
    <S.SidebarItem>
      <p>{menu.name}</p>
    </S.SidebarItem>
  );
}

const S = {
  SidebarItem: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    margin-bottom: 1rem;
    color: #3a474e;
    font-weight: 700;
    font-size: 3rem;

    .active {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100px;
      background: #edeff1;
      border-radius: 10px;
      color: #586cf5;
    }
  `,
};

export default ActiveSidebarItem;
