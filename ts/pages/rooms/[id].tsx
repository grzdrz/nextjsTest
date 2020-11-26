import { useRouter } from 'next/router';

function RoomPage(): JSX.Element {
  const router = useRouter();
  const roomNumber = router.query.id;
  const label = `Room №${roomNumber} page`;

  return (
    <h1>
      {label}
    </h1>
  );
}

export default RoomPage;
