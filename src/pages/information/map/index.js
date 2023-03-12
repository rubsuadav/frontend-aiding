import React from 'react'

import ResourcesList from '../../../components/ResourcesList.js';
import Map from '../../../components/Map.js';
import { Table } from 'react-bootstrap';
import ResourcesListEdit from '../../../components/ResourcesListEdit.js';

export default function Index() {
  return (
    <div style={{ margin: '40px', padding: '40px'}}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th><h4>Mapa y Recursos</h4></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><ResourcesListEdit/></td>
          </tr>
      </tbody>
    </Table>
    </div>
  )
}
