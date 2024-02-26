import ImgBebidas from "../assets/img-bebidas.jpg";
import ImgMassas from "../assets/img-massas.jpg";
import ImgPratoPrincipal from "../assets/img-prato-principal.jpg";
import ImgSaladas from "../assets/img-saladas.jpg";
import ImgSobremesas from "../assets/img-sobremesas.jpg";

export const CardCategory = () => {
  return (
    <section className="container px-4 py-5 mt-5" id="custom-cards">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb breadcrumb-chevron p-3 bg-body-secondary rounded-3">
          <li className="breadcrumb-item">
            <a className="link-body-emphasis" href="#">
            <i className="bi bi-house-door-fill" />
              <span className="visually-hidden">Home</span>
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Categorias
          </li>
          <li className="breadcrumb-item">
            <a className="link-body-emphasis fw-semibold text-decoration-none" href="#">Receitas</a>
          </li>
        </ol>
      </nav>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${ImgBebidas})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Bebidas de todos os tipos.
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <button type="button" className="btn btn-warning btn-sm">
                    <i className="bi bi-cup-straw me-2" />
                    Bebidas
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${ImgMassas})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                O mundo das Massas.
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <button type="button" className="btn btn-info btn-sm">
                    <i className="bi bi-egg-fried me-2" />
                    Massas
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${ImgPratoPrincipal})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                O prato principal que encanta a todos.
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <button type="button" className="btn btn-secondary btn-sm">
                    <i className="bi bi-crosshair me-2" />
                    Prato Principal
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${ImgSaladas})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                O paraíso das lagartas.
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <button type="button" className="btn btn-success btn-sm">
                    <i className="bi bi-flower2 me-2" />
                    Saladas
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex align-items-center justify-content-center"
            style={{ backgroundImage: `url(${ImgSobremesas})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                Guloseimas sem botar defeito.
              </h3>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto">
                  <button type="button" className="btn btn-light btn-sm">
                    <i className="bi bi-boxes me-2" />
                    Sobremesas
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
