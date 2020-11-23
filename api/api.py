from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./flix.db'
db = SQLAlchemy(app)

#models
class Movies(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    year = db.Column(db.String(4))
    title = db.Column(db.String(140))
    origin = db.Column(db.String(140))
    director = db.Column(db.String(140))
    cast = db.Column(db.Text)
    genre = db.Column(db.String(140))
    wiki_page = db.Column(db.String(140))
    plot = db.Column(db.Text)

    def __init__(self, year, title, origin, director, cast, genre, wiki_page, plot):
        self.year = year
        self.title = title
        self.origin = origin
        self.director = director
        self.cast = cast
        self.genre = genre
        self.wiki_page = wiki_page
        self.plot = plot

    def serialize(self):
        return {
            "id": self.id,
            "year": self.year,
            "title": self.title,
            "origin": self.origin,
            "director": self.director,
            "cast": self.cast,
            "genre": self.genre,
            "wiki_page": self.wiki_page,
            "plot": self.plot
        }


#routes
@app.route('/')
def index():
    return 'Index Page'

@app.route("/search/", methods=['GET'])
def search():
    args = request.args
    title = args['q']
    movie = Movies.query.filter(Movies.title.contains(title)).all()
    movie_list = [i.serialize() for i in movie]
    return jsonify(movie_list)

@app.route("/edit/<title>", methods=['POST'])
def edit():
    pass

@app.route("/delete/<title>", methods=['POST'])
def delete():
    pass

@app.route("/add/<title>", methods=['POST'])
def add():
    pass

@app.after_request
def add_headers(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    return response


if __name__ == "__main__":
    app.run