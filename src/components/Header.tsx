export const Header = () => {
  return (
    <header className="p-3 text-bg-secondary fixed-top">
      <div className="container">
        <nav className="d-flex flex-wrap align-items-center justify-content-center">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
          >
            <i className="bi bi-shop m-1 fs-2" />
            <span className="fs-4 me-2">Cooking Recipes</span>
          </a>
          <ul className="nav nav-pills">
            <li className="nav-item"><a href="#" className="link-body-emphasis nav-link px-2 text-white fs-0">Home</a></li>
            <li className="nav-item"><a href="#" className="link-body-emphasis nav-link px-2 text-white fs-0">Categorias</a></li>
            <li className="nav-item"><a href="#" className="link-body-emphasis nav-link px-2 text-white fs-0">Receitas</a></li>
            <li className="nav-item"><a href="#" className="link-body-emphasis nav-link px-2 text-white fs-0">Sobre</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
