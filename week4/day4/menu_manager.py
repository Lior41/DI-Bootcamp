import psycopg2
from psycopg2 import OperationalError

class MenuManager:
    @staticmethod
    def _connect():
        try:
            conn = psycopg2.connect(
                dbname='resto',
                user='postgres',
                password='lioretsid',
                host='localhost',
                port='5432'
            )
            return conn
        except OperationalError as e:
            print(f"Connection error: {e}")
            return None

    @classmethod
    def get_by_name(cls, name):
        conn = cls._connect()
        if conn is not None:
            with conn.cursor() as cur:
                cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items WHERE item_name = %s", (name,))
                result = cur.fetchone()
                if result:
                    return {'item_id': result[0], 'item_name': result[1], 'item_price': result[2]}
                else:
                    return None

    @classmethod
    def all_items(cls):
        conn = cls._connect()
        if conn is not None:
            with conn.cursor() as cur:
                cur.execute("SELECT item_id, item_name, item_price FROM Menu_Items")
                items = cur.fetchall()
                return [{'item_id': item[0], 'item_name': item[1], 'item_price': item[2]} for item in items]
