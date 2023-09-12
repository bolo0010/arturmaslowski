export interface ProjectsList {
    title: string,
    description: string,
    tags: Array<string>,
    repoLink?: string,
    demoLink?: string
}

export const list = [
    {
        title: 'WorkJS',
        tags: ['typescript', 'express', 'react', 'passport'],
        repoLink: 'https://github.com/bolo0010/workjs',
        demoLink: 'https://work.arturmaslowski.pl/',
        description: 'Aplikacja stworzona specjalnie dla studentów i absolwentów, którzy pragną zaprezentować swoje umiejętności programistyczne w języku JavaScript w celu zdobycia pracy jako programista JavaScript. Ta platforma umożliwia użytkownikom wyeksponowanie swojego potencjału poprzez utworzenie osobistego profilu studenta.',
    },
    {
        title: 'RevPanel',
        tags: ['react', 'express', 'sequelize', 'draftjs'],
        repoLink: 'https://github.com/bolo0010/revpanel',
        demoLink: 'https://panel.arturmaslowski.pl/',
        description: 'Wersja demo aplikacji utworzonej w celu zarządzania treścią na stronie internetowej. Umożliwia tworzenie tekstów oraz ich ocenę. Pozwala na publikowanie różnych treści oraz umożliwia zarządzanie użytkownikami znajdującymi się w redakcji. Login: AdminUser Hasło: abcd1234',
    },
    {
        title: 'Okamikya',
        tags: ['react', 'express', 'sequelize', 'tinymce', 'multer'],
        repoLink: '',
        demoLink: 'https://okamikya.pl/',
        description: 'Okamikya.pl to portal pełen recenzji, opinii, artykułów ze świata anime, mangi, książek, gier, filmów, seriali oraz muzyki. Pełen wydarzeń i popkultury.',
    },
]