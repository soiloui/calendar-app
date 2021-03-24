import styled from 'styled-components';

const StyledTable = styled.div`
  overflow-x: auto;

  table{
    width: 100%;
    border-collapse: collapse;

    box-shadow: 3px 3px 8px rgba(0,0,0, 0.3);
    border-radius: 10px;
    overflow: hidden;
  }
  table, td{
    padding: 1em;
  }

   td,  th {
    text-align: center;
    border: 1px solid #ddd;
  }

  th {
    padding: 1em 0.5em;

    background-color: #008cff;
    color: #fff;
  }

  tr{
    transition: background .15s ease;
  }

  tr>:nth-child(1){
    white-space: nowrap;
  }

  tr:nth-child(even){
    background-color: #f2f2f2;
  }




  @media (max-width: 600px){
    th, td, tr {
      display: block;
    }

    thead tr {
		position: absolute;
		top: -9999px;
		left: -9999px;
	}

    tr{
      margin-bottom: 1.5em;
      box-shadow: 3px 3px 8px rgba(0,0,0, 0.3);
    }
  }
  @media (min-width: 600px){
    tr:hover {
      background-color: #ddd;
    }
  }
`;

export default StyledTable