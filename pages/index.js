import Account from '../src/components/Account'
import { NEXT_URL } from '../config';

export default function Home() {

  return (
    <div className="" >
      <Account />
    </div>
  )
}

export async function getServerSideProps() {
const response = await fetch(`${NEXT_URL}/api/user`).then((response) =>
  response.json()
);

const { user } = response;


if (!user) {
  return {
    redirect: { destination: "/login", permanent: false },
  };
}
return { props: { user } };
}