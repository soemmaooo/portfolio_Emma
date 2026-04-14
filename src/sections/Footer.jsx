const Footer = () => {
  return (
    <footer id="contact" className="bg-main-yellow-800 text-white py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-7">聯絡資料</h2>
        <p className="mb-4 text-center max-w-md text-slate-200">
          目前我正在尋找前端工程師職位，隨時歡迎聯絡我！
        </p>
        <div className="text-left pb-4">
          <p className="text-xl mb-3">
            <i className="bi bi-envelope me-2"></i>Email：soemmaooo@gmail.com
          </p>
          <p className="text-xl">
            <i className="bi bi-telephone me-2"></i>Phone：0987728677
          </p>
        </div>

        <a
          href="mailto:soemmaooo@gmail.com"
          className="bg-main-yellow-400 text-black px-8 py-4 rounded-4xl font-bold hover:bg-main-yellow-300 transition mt-6 mb-16 shadow-lg hover:ring-1 hover:ring-main-yellow-400 hover:ring-offset-2 hover:ring-offset-main-yellow-800 hover:shadow-main-yellow-300/30"
        >
          發送 Email 給我
        </a>

        <div className="text-sm text-main-yellow-700">
          &copy; 2026 Emma Su. Made with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
