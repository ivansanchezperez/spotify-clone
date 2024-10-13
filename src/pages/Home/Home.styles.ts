import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 8px;
  padding: 8px;
  overflow: hidden;
`;

export const Header = styled.div`
  grid-column: span 3;
  border-radius: 8px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
`;

export const LogoContainer = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Sidebar = styled.div`
  width: 72px;
  @media (min-width: 1024px) {
    width: 280px;
  }
  grid-row: span 2;
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 8px;
`;

export const ContentBlock = styled.div`
  background-color: #1e1e1e;
  padding: 16px;
  border-radius: 8px;
`;

export const SettingsButton = styled.button`
  padding: 12px;
`;
