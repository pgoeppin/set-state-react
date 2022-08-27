const Login = (props) => {

  const validateInput = (e) => {
    e.preventDefault();

    if (props.name === '' || props.pass === '') {
      props.setError(true);
      return;
    }
    props.setError(false);
    props.setName('');
    props.setPass('');
  };

  return (
    <div className="container d-flex justify-content-center py-4">
      <form className="login" onSubmit={validateInput}>
        {props.error ? <p className="text-warning">Todos los campos son obligatorios</p> : null}
        <div className="form-group py-2">
          <label className="text-light">Usuario</label>
          <input
            type="text"
            name="username"
            className="form-control"
            placeholder="Ingresa un usuario"
            onChange={(e) => props.setName(e.target.value)}
            value={props.name}
          />
        </div>
        <div className="form-group">
          <label className="text-light">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Ingresa una contraseña"
            onChange={(e) => props.setPass(e.target.value)}
            value={props.pass}
          />
        </div>
        {props.pass === '252525' ? <button className="btn btn-primary my-4" type="submit">Ingresar</button> : null}
      </form>
    </div>
  );
};

export default Login;
