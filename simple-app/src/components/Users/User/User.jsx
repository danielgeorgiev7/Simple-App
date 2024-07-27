function User({ info }) {
  const { username, name, phone, email, website, company, address } = info;
  return (
    <div className="user-box">
      <h1>Username: {username}</h1>
      <h2>Name: {name}</h2>
      <h2>Phone Number: {phone}</h2>
      <h2>Email: {email}</h2>
      <h2>Website: {website}</h2>
    </div>
  );
}

export default User;
