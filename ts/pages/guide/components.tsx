import Button from '../../components/button/button';

function ComponentsPage(): JSX.Element {
  return (
    <>
      <h1>Components Page</h1>
      <div style={{ width: '100px', height: '50px' }}>
        <Button />
      </div>
      <div style={{ width: '100px', height: '50px', marginTop: '20px' }}>
        <Button
          isHollow
        />
      </div>
    </>
  );
}

export default ComponentsPage;
