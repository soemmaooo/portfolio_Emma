const About = () => {
  const skills = [
    'React',
    'JavaScript (ES6+)',
    'CSS 3',
    'Sass',
    'Bootstrap',
    'Tailwind CSS',
    'Git',
    'RESTful APIs',
    'Axios',
    'Vite',
    'Figma',
  ];
  const learning = ['TypeScript', 'Agent AI'];

  return (
    <section id="about" className="py-8 bg-main-yellow-100">
      <div className="max-w-5xl mx-4 md:mx-auto p-12 bg-white rounded-3xl">
        <h2 className="text-3xl font-bold text-center pb-4 mb-10 text-slate-900 border-b-4 border-dotted border-main-yellow-600 block">
          關於我 & 技能專長
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* 關於我文字區塊 */}
          <div className="flex-1 space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              我具備 2 年 UI/UX 設計師的實務經驗，目前專攻 React
              前端開發。我擅長將美學直覺與邏輯開發結合，打造兼具使用者體驗與技術穩定性的數位產品。
            </p>
            <p>
              2025年6月開始，在六角學院 9
              個月的精實培訓中，我完成了從HTML/CSS/SCSS、JavaScript 到 React
              框架的技術深耕。
            </p>
            <p className="mb-1">
              期間我培養了團隊協作能力，曾與 4-5 位夥伴共同完成兩項指標性專題：
            </p>
            <ul>
              <li>- Bootstrap 切版專題：RWD 響應式佈局與樣式優化。</li>
              <li>
                - React 大型框架專題：串接 RESTful API，並熟練運用 Hooks、Redux
                Toolkit、React Router 與 React Hook Form
                進行狀態管理與表單驗證。
              </li>
            </ul>
            <p>
              也掌握 Git 版本控制與 Vite
              建構工具，更具備自發學習力，在結訓後自學 Tailwind CSS
              完成了個人履歷網站。目前我正積極學習 TypeScript
              以強化程式碼的嚴謹性並探索Agent
              AI，致力於透過人工智慧提升開發效率。
            </p>
            <p className="mb-1">我的核心優勢：</p>
            <p>
              我不只是工程師，更具備設計師的視角。我能精準還原設計稿，並從 UX
              角度提出優化建議，成為設計與工程端最有效的溝通橋樑。
            </p>
          </div>

          {/* 技能標籤區塊 */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-800 mb-3">技能</h3>

            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-main-yellow-50 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-medium hover:bg-main-yellow-50 hover:text-green-600 hover:border-green-200 transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">學習中</h3>

            <div className="flex flex-wrap gap-3">
              {learning.map((learning) => (
                <span
                  key={learning}
                  className="bg-slate-100 text-slate-700 border border-slate-200 px-4 py-2 rounded-lg font-medium hover:bg-main-yellow-50 hover:text-main-yellow-600 hover:border-main-yellow-200 transition cursor-default"
                >
                  {learning}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
