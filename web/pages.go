package web

import (
	"html/template"
	"net/http"
	"os"
)

func runLocalhost() {
	// place pages here, using http.HandleFunc
	http.HandleFunc("/home/", homeHandler)

	// make sure http is able to use static files (i.e. css and js)
	http.Handle("/Resources/App/Static/", http.StripPrefix("/Resources/App/Static/",
		http.FileServer(http.Dir("./Resources/App/Static"))))
}

type Page struct {
	Title string
	Body  []byte
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}

func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	t, _ := template.ParseFiles(tmpl + ".html")
	t.Execute(w, p)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/home/"):]
	p, err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	renderTemplate(w, "Resources/App/Html/home", p)
}