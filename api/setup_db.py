import csv
from models import Movies
from api import db

def db_setup():
    with open("movie_plots.csv", newline='') as csvfile:
        movies = csv.reader(csvfile, delimiter=',')
        movies = list(movies)
        for movie in movies:
            newentery = Movies(movie[0],movie[1], movie[2], movie[3], movie[4], movie[5], movie[6], movie[7])
            db.session.add(newentery)
            db.session.commit()


if __name__=='__main__':
    db.drop_all()
    db.create_all()
    db_setup()