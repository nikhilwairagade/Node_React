import styled from "styled-components";

export const Outer = styled.div`
.outer{
    min-height: calc(100vh - 80px);
    width: calc(100% - 236px);
	background: #f4f4f4;
	padding: 20px 24px;
	@media (max-width: 1399px) and (min-width: 1024px) {
		padding: 12px;
	}
	@media (max-width: 767px) {
		padding: 10px 0;
	}
	@media (max-width: 1023px) and (min-width: 768px) {
		padding: 12px;
	}
}

.header{
    height: 80px;
    background: #000000;
    padding-left: 21px;
    display: flex;
    align-items: center;
}

.logo{
    width:158px;
    height:33.44px;
}
.bellLogo{
    margin-left: auto;
    padding-right: 40px;
}

.sidebar {
    margin: 0;
    padding: 0;
    width: 236px;
    background-color: #232120;
    min-height: calc(100vh - 80px);
    color:#FFB91E;
  }

  ol{
      padding: 20px 0 0 0;

  }

  .sidebarTitle{
      margin-left: 12.5px;
  }


`;