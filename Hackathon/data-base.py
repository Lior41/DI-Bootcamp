import psycopg2
from psycopg2 import OperationalError, Error
from dotenv import load_dotenv
import os
from questions import Quiz, load_questions
# dbname=os.getenv('DB_NAME'),
#             user=os.getenv('DB_USER'),
#             password=os.getenv('DB_PASS'),
#             host=os.getenv('DB_HOST'),
#             port=os.getenv('DB_PORT')

def create_connection():
    try:
        conn = psycopg2.connect(
        dbname='actsA',
        user='postgres',
        password='lioretsid',
        host='localhost',
        port='5432'
        )
        return conn
    except OperationalError as e:
        print(f"Connection error: {e}")
        return None

def execute_query(connection, query, data=None):
    if connection is not None:
        with connection.cursor() as cursor:
            try:
                if data:
                    cursor.executemany(query, data)
                else:
                    cursor.execute(query)
                connection.commit()
                print("Query executed successfully")
            except Error as e:
                print(f"Execution error: {e}")

connection = create_connection()
insert_query_acts = "INSERT INTO acts (description, act_date, location, type, source, last_name, first_name) VALUES (%s, %s, %s, %s, %s, %s, %s)"

data_acts= [
    ('anti-semitic tags on his store', '2023-01-01', 'Paris', 'Vandalism', 'Private', 'Cohen', 'David'),
    ('Snatch her Maguen David neckless in the subway', '2020-04-16', 'New York', 'Agression', 'Report by jewish organisation', 'Berkowitz', 'Rachel'),
    ('Threatens with a knife in front of a Synagogue', '2022-07-22', 'Paris', 'Agression', 'Private', 'Levy', 'Sarah'),
    ('Insulting of dirty jew in the street','2007-07-04', 'Cannes', 'Agression', 'Private', 'Melloul', 'Liora'),
    ('Hit on the street with a baseball bat', '2023-12-31', 'Saint-Denis', 'Agression', 'Police', 'Sebban', 'Etienne'),
    ('Nazi tags on his car', '2021-10-25', 'Paris', 'Vandalism', 'Private','Abitbol', 'Patrick')
]

execute_query(connection, insert_query_acts, data_acts)

insert_query_stats="INSERT INTO Antisemitism_Stats (Country, Overall_Index, Age_Group, Anti_Jewish_Feeling) VALUES (%s, %s, %s, %s)"

data_stats= [
('Palestinian Territories', 93, '18-49', 92),
('Palestinian Territories', 93, '50+', 98),
('Iraq', 92, 'All Ages', 33),
('Yemen', 88, '50+', 79),
('Yemen', 88, '35-49', 92),
('Yemen', 88, '18-34', 89),
('Algeria', 87, 'All Ages', 92), 
('Libya', 87, 'All Ages', 87),
('Tunisia', 86, 'All Ages', 86), 
('Kuwait', 82, 'Female', 77),
('Kuwait', 82, 'Male', 85),
('Bahrain', 81, 'Under 34', 77),
('Bahrain', 81, '35+', 86),
('Jordan', 81, 'All Ages', 84), 
('Morocco', 80, '50+', 75),
('Morocco', 80, '35-49', 79),
('Morocco', 80, '18-34', 84),
('Qatar', 80, 'All Ages', 82),
('United Arab Emirates', 80, 'All Ages', 80)
]
execute_query(connection, insert_query_stats, data_stats)






def save_response(user_id, question, user_answer, is_correct):
    conn = None
    try:
       
        conn = psycopg2.connect(
            dbname='actsA',
            user='postgres',
            password='lioretsid',
            host='localhost',
            port='5432'
        )
        
        with conn:
            with conn.cursor() as cur:
                cur.execute("INSERT INTO quiz_responses (user_id, question, user_answer, is_correct) VALUES (%s, %s, %s, %s)",
                            (user_id, question, user_answer, is_correct))

    except (Exception, psycopg2.DatabaseError) as error:
        print(error)  

    finally:
        
        if conn is not None:
            conn.close()

questions = load_questions("C:\\Users\\ilayn\\OneDrive\\Documents\\DI-Bootcamp\\Hackathon\\questions.json")
quiz = Quiz(questions)
question, user_answer, is_correct = quiz.run()
save_response(1, question.question, user_answer, is_correct)
