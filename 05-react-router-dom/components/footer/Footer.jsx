

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          © 2025 Sua Empresa. Todos os direitos reservados.
        </p>
        <p className="mb-0">
          <a href="/sobre" className="text-white text-decoration-none">
            Sobre Nós
          </a>{" "}
          |{" "}
          <a href="/contato" className="text-white text-decoration-none">
            Contato
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;