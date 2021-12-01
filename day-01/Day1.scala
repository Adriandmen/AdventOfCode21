import scala.io.Source

object Day1 {
  private final val FILE_NAME = "input.txt"

  def countIncreasedMeasurements(measurements: List[Int]): Int =
    measurements.sliding(2) count { case a :: b :: Nil => a < b }

  // Could definitely be more efficient, however for the given input, this is more than enough.
  def countWindowedMeasures(measurements: List[Int]): Int =
    countIncreasedMeasurements(measurements.sliding(3).toList map { _.sum })

  def main(args: Array[String]): Unit = {
    val lines = Source.fromResource(FILE_NAME).getLines().toList map { _.toInt }

    println("Part 1: " + countIncreasedMeasurements(lines))
    println("Part 2: " + countWindowedMeasures(lines))
  }
}
