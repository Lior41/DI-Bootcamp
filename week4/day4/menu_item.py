import psycopg2
from psycopg2 import OperationalError

class MenuItem:
    def __init__(self, name, price, item_id=None):
        self.name = name
        self.price = price
        self.item_id = item_id

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

    def save(self):
        conn = self._connect()
        if conn is not None:
            with conn.cursor() as cur:
                if self.item_id is None:
                    cur.execute("INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s) RETURNING item_id",
                                (self.name, self.price))
                    self.item_id = cur.fetchone()[0]
                else:
                    cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s",
                                (self.name, self.price, self.item_id))
                conn.commit()

    def delete(self):
        conn = self._connect()
        if conn is not None and self.item_id is not None:
            with conn.cursor() as cur:
                cur.execute("DELETE FROM Menu_Items WHERE item_id = %s", (self.item_id,))
                conn.commit()
            self.item_id = None

    @classmethod
    def update(cls, item_id, new_name, new_price):
        conn = cls._connect()
        if conn is not None:
            with conn.cursor() as cur:
                cur.execute("UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_id = %s",
                            (new_name, new_price, item_id))
                conn.commit()
