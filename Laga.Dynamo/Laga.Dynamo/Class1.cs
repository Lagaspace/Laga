using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Laga.IO;
using Autodesk.DesignScript.Geometry;

namespace LagaDynamo
{
    public class helloDynamo
    {
        private helloDynamo() { }

        /// <summary>
        /// Read the whole data in an excel worksheet
        /// </summary>
        /// <param name="read"></param>
        /// <param name="path"></param>
        /// <param name="activeSheet"></param>
        /// <returns></returns>
        public static List<List<string>> ReadDataExcel(bool read, string path, int activeSheet)
        {
            List<Line> lstLineStr = new List<Line>();
            List<List<string>> bigData = new List<List<string>>();

            if (read)
            {
                //string path = "C:\\Users\\Carlos.Delabarrera\\Documents\\Scrum-Revit Bridge\\Bridge.xlsx";
                IOExcelRead iOExcelRead = new IOExcelRead(path);
                iOExcelRead.IORead_OpenExcelApp();
                iOExcelRead.IORead_SetActiveSheet(activeSheet, true);
                bigData = iOExcelRead.IOReadRange("");
                iOExcelRead.CloseExcelApp(false);
                return bigData;
                /*
                double Xa, Xb, Ya, Yb, Za, Zb;

                //autodesk geometry...
                Line ln;
                Point pa, pb;

                if(bigData.Count > 0)
                {
                    for(int i = 0; i < bigData.Count; i++) //reading the row.
                    {
                        Xa = Convert.ToDouble(bigData[i][0]);
                        Ya = Convert.ToDouble(bigData[i][1]);
                        Za = Convert.ToDouble(bigData[i][2]);

                        Xb = Convert.ToDouble(bigData[i][3]);
                        Yb = Convert.ToDouble(bigData[i][4]);
                        Zb = Convert.ToDouble(bigData[i][5]);

                        pa = Point.ByCoordinates(Xa, Ya, Za);
                        pb = Point.ByCoordinates(Xb, Yb, Zb);

                        ln = Line.ByStartPointEndPoint(pa, pb);
                        lstLineStr.Add(ln);
                    }
                }

                return bigData;
                */
            }

            else
                {
                return bigData;
            }
            

        }

    }
}
