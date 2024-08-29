import { useState } from 'react';
import CabinTable from '../features/cabins/CabinTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import Button from '../ui/Button';
import CreateCabinForm from '../features/cabins/CreateCabinForm';

function Cabins() {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filters/Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button onClick={() => setFormOpen((state) => !state)}>
          Add cabin
        </Button>
        {isFormOpen && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
