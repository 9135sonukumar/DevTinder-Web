interface CardPorps {
  user: {
    [key: string]: any;
  };
}

const UserCard = ({ user }: CardPorps) => {
  const { firstName, lastName, age, gender, skills, about, photoUrl } = user;
  return (
    <div className="card bg-base-400 w-96 shadow-sm">
      <figure>
        <img src={photoUrl} alt="photo" className="w-dvh" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName ?? ""}
        </h2>
        {age && gender && (
          <p>
            {age}, {gender}
          </p>
        )}
        <p>{about}</p>
        <div className="card-actions my-1 justify-center">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
