export default function DashboardPage() {
	 return (
    <div className="flex flex-col justify-center h-screen items-center ">
      <div className="m-2">
        <label htmlFor="email" className="font-bold m-2">Email</label>
        <input className="rounded-md p-2 px-4 w-72" id="email" type="text" value={''} disabled />
      </div>

      <div>
        <label htmlFor="username" className="font-bold m-2">Name</label>
        <input
          className="rounded-md mb-5 p-2 px-4 w-72"
          id="username"
          type="text"
          value={username || ''}
          // onChange={(e) => setUsername(e.target.value)}
          disabled
        />
      </div>

      <div>
        <button className="border-2 border-red-700 rounded-xl p-2 px-8 m-1 uppercase  hover:bg-red-400 font-bold" onClick={() => loginSuccessCallback(false,'', '')}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export async function getServerSideProps({ req }) {
  console.log(req.body)
  // const { token } = parseCookie(req);

  // const res = await fetch(`${API_URL}/events/me`, {
  //   method: "GET",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  // const events = await res.json();

  return {
    props: { },
  };
}