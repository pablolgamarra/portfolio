export const info = {
	baseUrl: 'https://tu-portafolio.com', // Cambia esto a tu URL real
	name: 'Pablo Gamarra',
	jobDescription: 'Software Developer',
	about: `Soy desarrollador de software con 2 años de experiencia desarrollando aplicaciones web con React, TypeScript y SQL, así como scripts y automatizaciones con VBA y Bash. Llevo 4 años en el área de informática brindando soluciones ágiles y robustas. Actualmente, estoy cursando el último año de la carrera de Ingeniería en Informática.`,

	experience: [
		{
			name: 'Glymax Paraguay S.A',
			location: 'Ciudad del Este, Paraguay',
			startDate: 'Noviembre 2023',
			endDate: 'Actualidad',
			description: [
				'- Programación de aplicaciones empresariales utilizando Microsoft PowerApps y Power Automate.',
				'- Desarrollo de aplicaciones embebidas en SharePoint con React, TypeScript y SPFx.',
				'- Configuración de entornos de desarrollo en dominios de Office 365.',
				'- Despliegue de aplicaciones en Azure, SharePoint y servidores físicos con Docker.',
				'- Programación de scripts en PowerShell y Bash para administración de servicios en Office 365.',
				'- Control de versiones con Git y GitHub.',
				'- Administración de infraestructura de red (Fortinet, Cisco, UniFi).',
				'- Gestión de Windows Active Directory y servicios corporativos de Office 365.',
				'- Soporte técnico a usuarios de ERP SAP R3.',
			],
		},
		{
			name: 'Brumado S.A.',
			location: 'Ciudad del Este, Paraguay',
			startDate: 'Diciembre 2022',
			endDate: 'Noviembre 2023',
			description: [
				'- Desarrollo de automatizaciones con Macros Excel VBA para agilizar procesos administrativos.',
				'- Programación de aplicaciones web con React para entornos corporativos.',
				'- Edición y configuración de vistas y campos calculados en bases de datos (HANA, PostgreSQL).',
				'- Soporte a usuarios de ERP SAP B1.',
				'- Administración de servidores físicos y virtuales (Citrix, Windows Server, Linux).',
				'- Migración de suite corporativa de Google Workspace a Office 365.',
				'- Implementación de sistemas críticos para operativas comerciales y administrativas.',
			],
		},
		{
			name: 'Vive Telecom S.A.',
			location: 'Ciudad del Este, Paraguay',
			startDate: 'Marzo 2022',
			endDate: 'Diciembre 2022',
			description: [
				'- Instalación y configuración de WLAN con UniFi y cableado estructurado UTP.',
				'- Virtualización con VMware y configuración de sistemas de tickets RFID.',
				'- Asistencia en la configuración de videowalls y sistemas de punto de venta.',
			],
		},
	],

	education: [
		{
			name: 'Universidad Privada del Este',
			location: 'Ciudad del Este, Paraguay',
			startDate: '2021',
			endDate: 'Actualidad',
			description: ['Ingeniería en Informática (en curso).'],
		},
		{
			name: 'Colegio Nacional de Capiatá',
			location: 'Capiatá, Paraguay',
			startDate: '2016',
			endDate: '2020',
			description: ['Bachillerato Científico.'],
		},
	],

	socialMedia: {
		facebook: 'https://www.facebook.com/tu-perfil', // Cambia según corresponda
		twitter: 'https://twitter.com/tu-usuario',
		github: 'https://github.com/tu-usuario',
		email: 'mailto:tu-email@correo.com',
		linkedin: 'https://www.linkedin.com/in/tu-perfil',
	},

	projects: [
		{
			title: 'Gestor de Aplicaciones Empresariales',
			isFeatured: true,
			thumbnail: '/assets/images/proyecto1.png',
			githubUrl: 'https://github.com/tu-repo',
			liveUrl: 'https://live-url-del-proyecto.com',
		},
		{
			title: 'Sistema de Automatización de Procesos',
			isFeatured: true,
			thumbnail: '/assets/images/proyecto2.png',
			githubUrl: 'https://github.com/tu-repo',
			liveUrl: 'https://live-url-del-proyecto.com',
		},
		{
			title: 'Gestión de Infraestructura TI',
			isFeatured: false,
			thumbnail: '/assets/images/proyecto3.png',
			githubUrl: 'https://github.com/tu-repo',
			liveUrl: 'https://live-url-del-proyecto.com',
		},
	],
};
