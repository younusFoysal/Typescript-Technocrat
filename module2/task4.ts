interface Book {
    title: string;
    author: string;
    pages: number;
}

interface Magazine {
    title: string;
    issue: number;
}

type BookOrMagazine = Book | Magazine; // Union
type BookAndMagazine = Book & Magazine; // Intersection
