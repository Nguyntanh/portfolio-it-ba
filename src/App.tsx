import { useState, type ReactNode } from "react";
import {
  CheckCircle2,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  Workflow,
  Download,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Database,
  Calendar,
  Users,
  Briefcase,
  Copy,
  Check,
  MapPin,
} from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

// --- DATA TYPES ---
interface CarStory {
  context: string;
  action: string;
  result: string;
}

interface ProjectActionItem {
  title: string;
  detail: ReactNode;
}

interface ProjectMetric {
  value: string;
  label: string;
  sub: string;
}

interface ProjectLink {
  label: string;
  href: string;
  isPrimary?: boolean;
}

interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  role: string;
  scale: string;
  car: CarStory;
  actions: ProjectActionItem[];
  metrics: ProjectMetric[];
  artifacts: string[];
  techStack: string[];
  links: ProjectLink[];
}

// --- CASE STUDIES DATA ---
const CASE_STUDIES: CaseStudy[] = [
  {
    id: "smart-wms",
    tag: "Kho vận & Chuỗi cung ứng",
    title: "Smart WMS (Hệ thống Quản lý Kho thông minh)",
    role: "IT Business Analyst (Business Process & System Modeler)",
    scale: "Nhóm 5 kỹ sư | Chu kỳ 4 tháng (06/2026 – 09/2026)",
    car: {
      context:
        "Doanh nghiệp đối mặt với tình trạng lãng phí 25–40% thể tích kho do sắp xếp cảm tính và nguy cơ xuất âm kho khi nhiều nhân sự cùng nhặt một mã SKU tại một thời điểm.",
      action:
        "Trực tiếp khảo sát hiện trạng, chuẩn hóa luồng quy trình vận hành As-Is/To-Be cho 4 phân hệ cốt lõi (Inbound, Put-away, Picking, Outbound) qua 12+ sơ đồ Use Case và Sequence Diagrams; đặc tả 10 Business Invariants (Quy tắc bất biến). Thiết kế Data Dictionary 18 bảng (3NF); phối hợp chặt chẽ với Tech Lead thống nhất giải pháp kiểm soát giao dịch đồng thời (Concurrency Control).",
      result:
        "Hệ thống loại bỏ hoàn toàn rủi ro xuất âm kho (0% Data Drift) khi kiểm thử tải 500 người dùng ảo đồng thời (412 TPS, P95 < 380ms); giải pháp gợi ý vị trí kho theo ma trận ABC và định tuyến nhặt hàng giúp tăng 22.8% dung tích sử dụng và giảm 58.5% quãng đường di chuyển của nhân viên kho.",
    },
    actions: [
      {
        title: "Khảo sát & Chuẩn hóa Luồng Quy trình (As-Is / To-Be)",
        detail:
          "Mô hình hóa toàn bộ chu trình luân chuyển hàng hóa kho qua sơ đồ BPMN/Activity Diagram. Xây dựng tài liệu SRS chi tiết với 10 quy tắc nghiệp vụ bất biến cho 4 phân hệ: Nhập hàng (Inbound), Bố trí vị trí (Put-away), Nhặt hàng (Picking), và Xuất hàng (Outbound).",
      },
      {
        title: "Đặc tả Logic Tối ưu Vận hành (Business Logic Specification)",
        detail:
          "Chuyển hóa bài toán xếp dỡ thực tế thành tập ràng buộc hệ thống (tải trọng kệ, thể tích 3 chiều, tần suất quay vòng hàng hóa ABC). Phối hợp cùng đội ngũ kỹ thuật đặc tả thuật toán gợi ý vị trí lưu trữ và lộ trình nhặt hàng dạng S-Shape tối ưu cho nhân sự vận hành.",
      },
      {
        title: "Mô hình hóa Dữ liệu & Ràng buộc Nghiệp vụ Thời gian thực",
        detail: (
          <span>
            Thiết kế Data Dictionary cho 18 bảng chuẩn 3NF, xác lập công thức tính Tồn kho Khả dụng thời gian thực (
            <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded font-mono text-xs font-semibold">
              Available = OnHand - Reserved - Frozen
            </code>
            ). Đặc tả cơ chế khóa bi quan (Pessimistic Locking) trong kịch bản nhặt hàng đồng thời, ngăn chặn triệt để tình trạng Race Condition và bán vượt tồn kho.
          </span>
        ),
      },
    ],
    metrics: [
      {
        value: "0% Data Drift",
        label: "Toàn vẹn tồn kho",
        sub: "Triệt tiêu hoàn toàn lỗi âm kho và sai lệch tồn kho khi nhiều thủ kho thao tác cùng lúc.",
      },
      {
        value: "-58.5% Quãng đường Di chuyển",
        label: "Tối ưu lộ trình lấy hàng",
        sub: "Tăng 22.8% dung tích khai thác thực tế của kho.",
      },
      {
        value: "412 TPS (P95 < 380ms)",
        label: "Nghiệm thu tải hệ thống",
        sub: "Đảm bảo yêu cầu phi chức năng (NFRs) về độ phản hồi hệ thống dưới tải 500 VUs.",
      },
    ],
    artifacts: [
      "Business Process Flow (BPMN) & SRS Document (10 Business Invariants)",
      "Data Dictionary & Logical ERD (18 Bảng, Chuẩn 3NF)",
      "UAT Test Scenarios & Concurrency Verification Report",
    ],
    techStack: [
      "MySQL 8.0",
      "Postman",
      "Swagger/OpenAPI",
      "Draw.io",
      "Jira Software",
      "NestJS",
      "React",
    ],
    links: [
      {
        label: "Xem SRS & Mô hình ERD",
        href: "/docs/SmartWMS_Final_Report.pdf#page=23",
        isPrimary: true,
      },
      {
        label: "Xem Đặc tả Logic Vận hành",
        href: "/docs/SmartWMS_Final_Report.pdf#page=17",
      },
      {
        label: "Xem Báo cáo Nghiệm thu Tải & UAT",
        href: "/docs/SmartWMS_Final_Report.pdf#page=79",
      },
    ],
  },
  {
    id: "internhub",
    tag: "Quản trị Nhân tài & Đào tạo Doanh nghiệp",
    title: "InternHub (Nền tảng Quản trị & Đánh giá Thực tập sinh Tập trung)",
    role: "IT Business Analyst (Requirements Engineering & Agile Delivery)",
    scale: "Nhóm 5 kỹ sư | 5 Sprints (01/2026 – 04/2026)",
    car: {
      context:
        "Doanh nghiệp quản lý thực tập sinh phân tán qua bảng tính Excel và ứng dụng chat rời rạc, dẫn đến sai lệch dữ liệu, thiếu minh bạch trong chấm điểm và tiêu tốn nhiều thời gian tổng hợp thủ công.",
      action:
        "Khảo sát nỗi đau từ HR, Mentor và Thực tập sinh; phân rã yêu cầu thành 33 User Stories chuẩn INVEST kèm Acceptance Criteria (Given-When-Then); chuẩn hóa 38 RESTful API Contracts. Xây dựng Data Dictionary 26 bảng; đặc tả máy trạng thái FSM kiểm soát vòng đời thực tập và cấu trúc Audit Trail bất biến lưu vết lịch sử chấm điểm. Phối hợp với Tech Lead đặc tả luồng xử lý nền bất đồng bộ cho tác vụ import danh sách lớn.",
      result:
        "Bàn giao 100% phạm vi MVP đúng hạn sau 5 Sprints; cắt giảm > 70% thời gian xử lý nghiệp vụ thủ công; hệ thống xử lý import mượt mà > 1.000 hồ sơ trong 30 giây mà không gây nghẽn giao diện; đảm bảo 100% dữ liệu đánh giá có thể kiểm toán và đối soát minh bạch.",
    },
    actions: [
      {
        title: "Phân rã Yêu cầu & Quản trị Agile Backlog",
        detail:
          "Phỏng vấn các bên liên quan (HR, Mentor, Intern) để bóc tách yêu cầu. Phân rã thành 33 User Stories chuẩn INVEST kèm tiêu chí chấp nhận Acceptance Criteria chi tiết dạng Gherkin (Given-When-Then); quản lý và làm mịn (refine) Product Backlog trên Jira qua 5 Sprints.",
      },
      {
        title: "Đặc tả Kiểm toán Dữ liệu (Audit Trail) & Máy trạng thái (FSM)",
        detail:
          "Mô hình hóa vòng đời thực tập sinh qua máy trạng thái hữu hạn (FSM) 8 phân hệ. Thiết kế Data Dictionary 26 bảng, đặc tả cơ chế đóng băng tiêu chí Rubric đánh giá tại thời điểm chấm (Snapshot) và cơ chế Append-Only Audit Trail phục vụ đối soát và xử lý khiếu nại minh bạch.",
      },
      {
        title: "Đặc tả Tích hợp API & Ràng buộc Phi chức năng (NFRs)",
        detail:
          "Xây dựng 38 API Contracts trên OpenAPI/Swagger kèm Error Catalog tường minh. Đặc tả luồng xử lý tác vụ nền bất đồng bộ (Queue) khi import hàng loạt dữ liệu, quy định cơ chế khóa tuần tự nhằm ngăn chặn Deadlock hệ thống khi gán Mentor đồng loạt.",
      },
    ],
    metrics: [
      {
        value: "> 70% Giảm tải Thao tác",
        label: "Tự động hóa vận hành",
        sub: "Tự động hóa hoàn toàn quy trình theo dõi, chấm điểm và tổng hợp báo cáo thực tập.",
      },
      {
        value: "100% Toàn vẹn Dữ liệu Đánh giá",
        label: "Kiểm toán & Đối soát",
        sub: "Đóng băng bảng điểm tại thời điểm xác nhận, bảo toàn lịch sử chấm điểm tuyệt đối.",
      },
      {
        value: "< 300ms Độ trễ Dashboard",
        label: "Hiệu năng & Tác vụ nền",
        sub: "Đảm bảo hiệu năng tải trang và xử lý nền mượt mà file import > 1.000 dòng trong 30s.",
      },
    ],
    artifacts: [
      "Business Requirement Document (BRD) & 33 INVEST User Stories (Gherkin AC)",
      "OpenAPI 3.0 Specs & Error Catalog (38 Endpoints)",
      "FSM Lifecycle Diagram, Data Dictionary (26 Bảng) & Kịch bản Kiểm thử UAT",
    ],
    techStack: [
      "PostgreSQL",
      "Postman",
      "Swagger/OpenAPI",
      "Jira Software",
      "Draw.io",
      "Redis",
      "NestJS",
      "React",
    ],
    links: [
      {
        label: "Xem BRD & Luồng Trạng thái FSM",
        href: "https://drive.google.com/file/d/1b_7t6mWdC27bUutBzp_BymuW5kNYZM7t/view?usp=sharing",
        isPrimary: true,
      },
      {
        label: "Xem API Contracts & Error Catalog",
        href: "https://docs.google.com/spreadsheets/d/1uRIa9cqvaWmvsLtL5lNIetPz_nX8Z6-G8MXU-r7NcBY/edit?usp=sharing",
      },
      {
        label: "Xem Kịch bản Kiểm thử UAT",
        href: "https://docs.google.com/spreadsheets/d/1ePRmhHBshXBfGFiMU9lLguxIRUIyRa8goj6EFtPVnv0/edit?usp=sharing",
      },
    ],
  },
];

// --- SKILL PILLARS ---
interface SkillPillar {
  index: number;
  title: string;
  subTitle?: string;
  sections: {
    label: string;
    items: string[];
  }[];
}

const SKILL_PILLARS: SkillPillar[] = [
  {
    index: 1,
    title: "Phân tích Nghiệp vụ & Mô hình hóa Quy trình",
    sections: [
      {
        label: "Khảo sát & Thu thập Yêu cầu",
        items: [
          "Stakeholder Interviewing",
          "Elicitation Techniques",
          "Gap Analysis (As-Is vs. To-Be)",
          "Scope Management (MVP vs. Enhancements)",
        ],
      },
      {
        label: "Tài liệu hóa Yêu cầu Phần mềm",
        items: [
          "BRD (Business Requirements Document)",
          "SRS (Software Requirements Specification)",
          "User Stories (chuẩn INVEST)",
          "Acceptance Criteria (Given-When-Then / Gherkin)",
        ],
      },
      {
        label: "Mô hình hóa Trực quan",
        items: [
          "BPMN 2.0 (Business Process Modeling Notation)",
          "UML 2.0 (Use Case, Activity, Sequence Diagrams)",
          "Finite State Machine (FSM)",
        ],
      },
      {
        label: "Trực quan hóa Giao diện",
        items: [
          "User Journey Mapping",
          "Information Architecture",
          "Wireframing & Prototyping (Figma)",
        ],
      },
    ],
  },
  {
    index: 2,
    title: "Thiết kế Dữ liệu & Tích hợp Hệ thống (Data & System Integration)",
    sections: [
      {
        label: "Mô hình hóa Dữ liệu",
        items: [
          "Conceptual / Logical / Physical Data Modeling",
          "Entity Relationship Diagram (ERD)",
          "Data Dictionary",
          "Chuẩn hóa dữ liệu (3NF)",
        ],
      },
      {
        label: "Quy chuẩn Tích hợp API",
        items: [
          "Đặc tả RESTful API Contracts",
          "OpenAPI 3.0 / Swagger Specs",
          "API Mocking",
          "Postman Collection",
          "Xây dựng Error Catalog chuẩn mực",
        ],
      },
      {
        label: "Quy tắc Nghiệp vụ Dữ liệu (Data Business Rules)",
        items: [
          "Thiết kế Audit Trail (Lưu vết kiểm toán)",
          "Immutable Data Snapshots",
          "Ràng buộc toàn vẹn dữ liệu (Integrity Constraints)",
        ],
      },
      {
        label: "Tư duy Kiến trúc & Concurrency",
        items: [
          "Hiểu sâu về ACID Transactions",
          "Cơ chế xử lý hàng đợi bất đồng bộ (Message Queue)",
          "Kiểm soát xung đột dữ liệu đồng thời (Pessimistic/Optimistic Locking) dưới góc độ đặc tả nghiệp vụ",
        ],
      },
    ],
  },
  {
    index: 3,
    title: "Quản trị Agile, Kiểm thử & Đảm bảo Chất lượng (Quality Assurance)",
    sections: [
      {
        label: "Phương pháp luận Phát triển",
        items: [
          "Agile/Scrum",
          "Kanban",
          "Waterfall",
          "Quản trị và làm mịn Product Backlog",
          "Phân rã User Story",
          "Tổ chức Sprint Planning",
        ],
      },
      {
        label: "Kiểm thử Chấp nhận Người dùng (UAT)",
        items: [
          "Xây dựng UAT Test Plan",
          "Viết UAT Test Cases",
          "Phối hợp điều phối kiểm thử nghiệm thu người dùng cuối",
          "Quản lý Bug Lifecycle",
        ],
      },
      {
        label: "Đặc tả Yêu cầu Phi chức năng (NFRs)",
        items: [
          "Định lượng tiêu chí về Hiệu năng (Latency P95, Throughput TPS)",
          "Bảo mật cơ bản (Authentication/Authorization, RBAC)",
          "Tính sẵn sàng",
        ],
      },
      {
        label: "Công cụ Làm việc Chuyên nghiệp",
        items: [
          "Jira Software",
          "Confluence",
          "Postman",
          "Draw.io",
          "Figma",
          "Git",
          "TablePlus/DBeaver",
        ],
      },
    ],
  },
];

// --- MILESTONES DATA ---
interface MilestoneItem {
  period: string;
  project: string;
  affiliation: string;
  role: string;
  team: string;
  highlights: { title: string; content: string }[];
}

const MILESTONES: MilestoneItem[] = [
  {
    period: "06/2026 – 09/2026",
    project: "Smart WMS (Hệ thống Quản lý Kho thông minh)",
    affiliation: "Đồ án Kỹ thuật Phần mềm Xuất sắc – Đại học CMC",
    role: "IT Business Analyst (Business Process & System Modeler)",
    team: "Nhóm 5 thành viên · Scrum 4 tháng",
    highlights: [
      {
        title: "Chuẩn hóa Quy trình Vận hành",
        content:
          "Khảo sát bài toán lãng phí thể tích kho; thiết kế quy trình To-Be cho 4 luồng nghiệp vụ (Inbound, Put-away, Picking, Outbound) qua 12+ sơ đồ UML và đặc tả 10 Business Invariants.",
      },
      {
        title: "Mô hình hóa Dữ liệu & Ràng buộc Hệ thống",
        content:
          "Thiết kế ERD và Data Dictionary 18 bảng chuẩn 3NF; xác lập logic kiểm soát tồn kho thời gian thực, phối hợp kỹ thuật loại bỏ rủi ro xuất âm kho.",
      },
      {
        title: "Tối ưu Vận hành & Nghiệm thu Tải",
        content:
          "Đặc tả logic gợi ý vị trí kho theo ma trận ABC và định tuyến S-Shape (giúp giảm 58.5% quãng đường); nghiệm thu hệ thống đạt 412 TPS dưới tải 500 người dùng ảo.",
      },
    ],
  },
  {
    period: "01/2026 – 04/2026",
    project: "InternHub (Nền tảng Quản trị & Đánh giá Thực tập sinh Doanh nghiệp)",
    affiliation: "Dự án Phát triển Hệ thống – Đại học CMC",
    role: "IT Business Analyst (Requirements & Agile Delivery)",
    team: "Nhóm 5 thành viên · 5 Sprints Agile",
    highlights: [
      {
        title: "Phân rã Yêu cầu & Quản trị Backlog",
        content:
          "Phỏng vấn các bên liên quan, bóc tách 33 INVEST User Stories kèm tiêu chí nghiệm thu chặt chẽ; tinh chỉnh Product Backlog hỗ trợ đội ngũ bàn giao 100% phạm vi MVP đúng hạn.",
      },
      {
        title: "Minh bạch Hóa Dữ liệu & Đặc tả API",
        content:
          "Thiết kế Data Dictionary 26 bảng và 38 API Contracts chuẩn OpenAPI; mô hình hóa quy trình đánh giá bằng FSM và cơ chế Audit Trail chống sửa đổi điểm sai quy định.",
      },
      {
        title: "Chủ trì UAT & Tối ưu Trải nghiệm",
        content:
          "Đặc tả kịch bản xử lý bất đồng bộ cho tác vụ import hàng loạt; xây dựng kịch bản kiểm thử và chủ trì nghiệm thu người dùng (UAT), đảm bảo bàn giao giải pháp đúng cam kết nghiệp vụ.",
      },
    ],
  },
  {
    period: "2022 – 2026",
    project: "Cử nhân Kỹ thuật Phần mềm",
    affiliation: "Trường Đại học CMC (CMC University)",
    role: "Xếp loại: Sinh viên Giỏi | GPA: 3.35 / 4.0",
    team: "Chương trình Đào tạo Kỹ sư chuẩn Quốc tế",
    highlights: [
      {
        title: "Nền tảng Phân tích & Thiết kế",
        content:
          "Nắm vững phân tích nghiệp vụ, phương pháp luận OOAD, mô hình hóa BPMN 2.0, UML 2.0 và quy chuẩn hóa tài liệu phần mềm BRD/SRS chuyên nghiệp.",
      },
      {
        title: "Tư duy Dữ liệu & Hệ thống",
        content:
          "Nền tảng chuyên sâu về Cơ sở dữ liệu quan hệ (RDBMS), chuẩn hóa dữ liệu 3NF, đại số quan hệ và cơ chế kiểm soát giao dịch dữ liệu.",
      },
      {
        title: "Quy trình Chuyển giao Phần mềm",
        content:
          "Thực hành bài bản quy trình Agile/Scrum, quản trị sản phẩm trên Jira/Confluence, kiểm thử phần mềm và nghiệm thu UAT.",
      },
    ],
  },
];

export default function Portfolio() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText("nguyntanh2k5@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. NAVBAR */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight group-hover:text-blue-600 transition-colors">
              Nguyễn Tuấn Anh
            </span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              IT Business Analyst
            </span>
          </a>

          <div className="flex items-center gap-1 sm:gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <a
              href="#projects"
              className="hidden sm:inline-block hover:text-blue-600 transition-colors py-1 px-2"
            >
              Dự án
            </a>
            <a
              href="#skills"
              className="hidden sm:inline-block hover:text-blue-600 transition-colors py-1 px-2"
            >
              Kỹ năng
            </a>
            <a
              href="#experience"
              className="hidden sm:inline-block hover:text-blue-600 transition-colors py-1 px-2"
            >
              Kinh nghiệm
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs sm:text-sm transition-all shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Liên hệ</span>
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. HERO SECTION */}
        <section className="py-16 sm:py-24 border-b border-slate-200/70 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Sẵn sàng tiếp nhận vị trí IT Business Analyst / Systems Analyst tại Hà Nội &amp; Remote</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-5 max-w-4xl">
              Cử nhân Kỹ thuật Phần mềm định hướng{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
                IT Business Analyst
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
              Chuyển hóa bài toán vận hành phức tạp thành quy trình chuẩn hóa (BPMN), tài liệu đặc tả hệ thống (SRS/User Stories) chuẩn mực, mô hình dữ liệu quan hệ (ERD/Data Dictionary) và tích hợp API thông suốt giữa Khối Vận hành và Đội ngũ Kỹ thuật.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-xs"
              >
                <span>Khám phá Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/docs/Nguyen-Tuan-Anh-Technical-BA.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm border border-slate-200 hover:border-slate-300 transition-all shadow-2xs"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>Tải IT BA Resume (PDF)</span>
              </a>

              <div className="flex items-center gap-2 sm:ml-2 pt-2 sm:pt-0">
                <a
                  href="https://www.linkedin.com/in/nguyntanh2k5/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nguyntanh2k5@gmail.com"
                  title="Email"
                  className="p-2.5 rounded-lg bg-white hover:bg-slate-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* METRICS SUMMARY CHỦ LỰC */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div className="p-4 sm:p-5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                  0% Sai lệch Dữ liệu (Zero Data Drift)
                </div>
                <div className="text-xs font-semibold text-blue-700 mb-1">
                  Toàn vẹn giao dịch thời gian thực
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Đảm bảo toàn vẹn giao dịch thời gian thực; triệt tiêu hoàn toàn rủi ro xuất âm kho và xung đột dữ liệu dưới tải 500 người dùng đồng thời.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 mb-1">
                  -58.5% Quãng đường Di chuyển
                </div>
                <div className="text-xs font-semibold text-emerald-800 mb-1">
                  Tối ưu hóa quy trình nhặt hàng
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Tối ưu hóa quy trình nhặt hàng nhờ phân tích nghiệp vụ định tuyến S-Shape kết hợp ma trận phân bổ không gian ABC.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-slate-50/80 border border-slate-200/80">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                  100% Nghiệm thu MVP Đúng hạn
                </div>
                <div className="text-xs font-semibold text-slate-700 mb-1">
                  Quản trị và tinh chỉnh Backlog
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Quản trị và tinh chỉnh Backlog qua 5 Sprints; nghiệm thu 100% Acceptance Criteria cho 33 User Stories và 38 API Contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED IT BA CASE STUDIES */}
        <section id="projects" className="py-16 sm:py-24 border-b border-slate-200/70 scroll-mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Dự án Thực tế
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Featured IT BA Case Studies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Đặc tả hệ thống, mô hình hóa quy trình BPMN, chuẩn hóa tài liệu SRS/User Stories và tối ưu hóa vận hành với số liệu kiểm chứng thực tế.
              </p>
            </div>

            <div className="space-y-12">
              {CASE_STUDIES.map((project, idx) => (
                <article
                  key={project.id}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all"
                >
                  {/* Top Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-900 text-white font-mono">
                          Dự án {idx + 1}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
                          {project.tag}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>
                          Vai trò: <strong className="text-slate-800 font-semibold">{project.role}</strong>
                        </span>
                        <span className="text-slate-300">•</span>
                        <span>
                          Quy mô: <strong className="text-slate-700 font-medium">{project.scale}</strong>
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
                      {project.title}
                    </h3>

                    {/* Mô tả Tóm tắt (Context - Action - Result) */}
                    <div className="p-5 rounded-xl bg-slate-50/90 border border-slate-200/80 space-y-3.5">
                      <div className="flex items-center gap-2 pb-2 border-b border-slate-200/70">
                        <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold tracking-wide uppercase">
                          CAR Framework
                        </span>
                        <span className="text-xs font-bold text-slate-900">
                          Mô tả Tóm tắt (Context - Action - Result)
                        </span>
                      </div>

                      <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed">
                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                          <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] sm:text-xs shrink-0 self-start border border-amber-200/70">
                            Bối cảnh &amp; Bài toán Vận hành
                          </span>
                          <span className="text-slate-700">{project.car.context}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                          <span className="font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px] sm:text-xs shrink-0 self-start border border-blue-200/70">
                            Giải pháp IT BA
                          </span>
                          <span className="text-slate-700">{project.car.action}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] sm:text-xs shrink-0 self-start border border-emerald-200/70">
                            Kết quả Đạt được
                          </span>
                          <span className="text-slate-700 font-medium">{project.car.result}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Taken: Trọng tâm Phân tích & Đặc tả Hệ thống */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <Workflow className="w-4 h-4 text-blue-600" />
                      <span>Trọng tâm Phân tích &amp; Đặc tả Hệ thống</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                      {project.actions.map((act, aIdx) => (
                        <div
                          key={aIdx}
                          className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="text-xs font-bold text-slate-900 mb-2 flex items-start gap-2">
                              <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                                {aIdx + 1}
                              </span>
                              <span className="leading-snug">{act.title}</span>
                            </div>
                            <div className="text-xs text-slate-600 leading-relaxed">
                              {act.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Metrics: Chỉ số Kiểm chứng Thực tế */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                      <span>Chỉ số Kiểm chứng Thực tế</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/70"
                        >
                          <div className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-xs font-semibold text-slate-700 mt-0.5">
                            {m.label}
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                            {m.sub}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Deliverables & Tech Stack */}
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-slate-700 mr-1 flex items-center gap-1 shrink-0">
                        <FileText className="w-3.5 h-3.5 text-blue-600" />
                        Key Deliverables:
                      </span>
                      {project.artifacts.map((art, artIdx) => (
                        <span
                          key={artIdx}
                          className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-100 font-medium text-xs shadow-2xs"
                        >
                          {art}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-semibold text-slate-700 mr-1 flex items-center gap-1 shrink-0">
                        <Database className="w-3.5 h-3.5 text-slate-500" />
                        Hệ sinh thái Công nghệ &amp; Công cụ Phân tích:
                      </span>
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 font-mono text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-semibold text-slate-700 mr-1 flex items-center gap-1">
                      <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                      Tài liệu minh chứng:
                    </span>
                    {project.links.map((link, lIdx) => (
                      <a
                        key={lIdx}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          link.isPrimary
                            ? "bg-blue-600 hover:bg-blue-700 text-white shadow-2xs"
                            : "bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HỆ THỐNG NĂNG LỰC IT BUSINESS ANALYST */}
        <section id="skills" className="py-16 sm:py-24 border-b border-slate-200/70 bg-white scroll-mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Hệ thống Năng lực IT Business Analyst
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                IT BA Core Competencies
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Hệ thống kỹ năng được xây dựng nhằm làm cầu nối vững chắc giữa bài toán vận hành của doanh nghiệp và giải pháp công nghệ khả thi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SKILL_PILLARS.map((pillar) => (
                <div
                  key={pillar.index}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                        {pillar.index}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    <div className="space-y-4 pt-2">
                      {pillar.sections.map((sec, sIdx) => (
                        <div key={sIdx} className="space-y-1.5">
                          <div className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span>{sec.label}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pl-3">
                            {sec.items.map((item, iIdx) => (
                              <span
                                key={iIdx}
                                className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. HÀNH TRÌNH THỰC CHIẾN & HỌC VẤN */}
        <section id="experience" className="py-16 sm:py-24 border-b border-slate-200/70 scroll-mt-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                Hành trình Thực chiến &amp; Học vấn
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Kinh nghiệm Thực chiến &amp; Quá trình Đào tạo
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Quá trình tích lũy năng lực phân tích nghiệp vụ, mô hình hóa hệ thống và nền tảng kỹ thuật phần mềm chính quy.
              </p>
            </div>

            <div className="space-y-8">
              {MILESTONES.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs hover:border-slate-300 transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                    <div>
                      <div className="text-xs font-medium text-blue-600 mb-1 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{m.period}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500 font-medium">{m.affiliation}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                        {m.project}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        <span className="font-semibold text-slate-900">{m.role}</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <div className="flex items-center gap-1 text-slate-500">
                        <Users className="w-3.5 h-3.5" />
                        <span>{m.team}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {m.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>{h.title}</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {h.content}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. THÔNG TIN LIÊN HỆ */}
        <section id="contact" className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Thông tin Liên hệ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                Sẵn sàng tiếp nhận cơ hội hợp tác mới
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Hiện tại tôi đang tìm kiếm cơ hội làm việc chính thức ở vị trí <strong>IT Business Analyst / Systems Analyst</strong> (Toàn thời gian hoặc Hybrid tại Hà Nội). Rất mong có cơ hội trao đổi trực tiếp cùng Quý công ty.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {/* Email */}
              <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                      <Mail className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Email</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Hộp thư liên hệ
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono break-all mb-4">
                    nguyntanh2k5@gmail.com
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Đã sao chép</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>Sao chép</span>
                      </>
                    )}
                  </button>
                  <a
                    href="mailto:nguyntanh2k5@gmail.com"
                    className="py-1.5 px-3 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Gửi thư</span>
                  </a>
                </div>
              </div>

              {/* Phone / Zalo */}
              <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                      <Phone className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Điện thoại / Zalo</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Hotline &amp; Zalo
                  </div>
                  <div className="text-base font-bold text-slate-900 font-mono mb-4">
                    0969 236 054
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60">
                  <a
                    href="tel:0969236054"
                    className="flex-1 py-1.5 px-2.5 rounded-lg text-xs font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 flex items-center justify-center gap-1 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-slate-500" />
                    <span>Gọi điện</span>
                  </a>
                  <a
                    href="https://zalo.me/0969236054"
                    target="_blank"
                    rel="noreferrer"
                    className="py-1.5 px-3 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Chat Zalo</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-lg bg-slate-100 text-slate-700">
                      <MapPin className="w-4 h-4" />
                    </span>
                    <span className="text-[11px] font-medium text-slate-500">Địa bàn làm việc</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    Khu vực
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-2">
                    Hà Đông, Hà Nội
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-xs text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Hà Nội On-site / Hybrid / Remote</span>
                </div>
              </div>
            </div>

            {/* Quick Resume Download Banner */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
              <div>
                <h3 className="text-base sm:text-lg font-bold">
                  Hồ sơ Năng lực (IT BA Resume)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Bản PDF chuẩn ATS tổng hợp chi tiết dự án thực chiến, quy chuẩn đặc tả dữ liệu và chỉ số kiểm chứng.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="/docs/Nguyen-Tuan-Anh-Technical-BA.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm transition-all shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải IT BA Resume (PDF)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/nguyntanh2k5/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Nguyễn Tuấn Anh · IT Business Analyst</span>
              </div>

              <div>
                © 2026 All Rights Reserved.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
