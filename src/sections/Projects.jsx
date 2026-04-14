import { useState } from 'react';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: '電商點餐平台 - GreenGo 綠果 | 輕食工坊',
      info: '「GreenGo 綠果」為六角學院 React 框架班團體專題作品，由五人團隊於 2026 年 3 月攜手打造。我主要負責會員中心、購物車結帳流程及後台商品管理開發，透過 React 串接六角學院 API，實踐狀態管理與商務邏輯運算。本專案不僅強化了對 JavaScript 的運用，更深入體現了前後端資料流整合與實務開發的高效協作。',
      description:
        'GreenGo 綠果 是一款基於 React 19 開發的健康飲食電商平台。\n專案核心在於結合「客製化餐點」與「數據化營養追蹤」，提供使用者依需求挑選或自組餐盒，並透過即時熱量計算與忌口篩選優化體驗。\n系統整合 Redux Toolkit 進行狀態管理，並具備完善的後台營運系統與權限分級，打造流暢的健康餐飲一站式服務。',
      tags: ['React', 'Bootstrap 5', 'Axios', 'RWD'],
      myFeatures:
        '前後台視覺視覺設計：主導專案整體的視覺風格定位與 UI 介面美化。\n前台：\n- 購物車系統：開發即時同步的購物車，支援數量增減與詳情確認。\n- 結帳與訂單：負責結帳頁面開發、串接結帳相關 API、填寫購買資料及訂單送出邏輯。\n- 會員中心：建置會員專區，供使用者追蹤訂單資訊與歷史紀錄。\n後台：\n- 商品管理模組：開發商品的新增、修改、刪除及進階篩選功能，確保後台數據維護的便利性。',
      img: 'src/assets/img/project_GreenGo.png',
      github: 'https://github.com/0811nora/greengo',
      web: 'https://0811nora.github.io/greengo/',
    },
    {
      id: 2,
      title: '預約平台 - 默隅 Moonook',
      info: '「默隅 Moonook」為六角學院切版班團體專題作品，由五位成員於 2025 年 10 月共同完成。我負責首頁切版，本作品專注於 HTML 與 CSS 排版技術與 Git 多人協作流程，為純切版練習，未包含 JavaScript 與 API 串接。',
      description:
        '「默隅 Moonook」是一套專為現代都市人設計的複合式空間管理系統，融合「共享空間、咖啡廳與網咖」概念。\n品牌以「寧靜角落」為核心，運用溫潤木質與簡約設計，結合 Bootstrap 5 技術打造具備彈性預約、會員管理與餐飲瀏覽的互動平台，旨在為使用者創造一個能與內在連結、自由沉澱的專屬空間體驗。',
      myFeatures:
        '作為首頁的主要開發者，我負責範圍涵蓋了使用者的第一印象與核心導航邏輯：\n- 視覺導航與佈局：建置包含導航列（Header）與頁尾（Footer）的整體框架，並完成 RWD 響應式設計（PC 與手機版）。\n- 預約導流邏輯：規劃與設計引導使用者快速前往預約服務頁面及菜單頁的入口按鈕，提升轉換效率。',
      tags: ['Bootstrap 5', 'RWD'],
      img: 'src/assets/img/project_Moonook.png',
      github: 'https://github.com/0811nora/moonook-demo',
      web: 'https://0811nora.github.io/moonook-demo/',
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [projectInfo, setProjectInfo] = useState(null);

  const handleProjectOpen = (id) => {
    setIsOpen(true);
    const actData = projectList.find((item) => item.id === id);
    setProjectInfo(actData);
  };

  return (
    <section id="projects" className="bg-main-yellow-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">精選作品</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => handleProjectOpen(project.id)}
            >
              <div className="h-52 bg-slate-200 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-slate-600 leading-7 whitespace-pre-wrap mb-4">
                  {project.info}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-main-yellow-100 text-green-600 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex">
                  <a
                    href={project.github}
                    target="_blank"
                    className="btn-primary block flex-1 me-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="bi bi-github me-1"></i>
                    GitHub
                  </a>
                  <a
                    href={project.web}
                    target="_blank"
                    className="btn-primary block flex-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="bi bi-globe me-1"></i>
                    Web
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isOpen && (
        <ProjectModal onClose={() => setIsOpen(false)} data={projectInfo} />
      )}
    </section>
  );
};

export default Projects;
