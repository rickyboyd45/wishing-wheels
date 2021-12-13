# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Car.destroy_all
User.destroy_all

@admin = User.create!(username: 'rickyboyd23', email: 'rickyboyd23@email.com', password: '123456' )

puts "#{User.count} users created"

Car.create!(make: "Oldsmobile", model: 'Cutlass', year: '1969', img_url: 'https://diasclassiccars.com/wp-content/uploads/2018/05/69-Olds-Cutlass-Supreme-Photo-Shoot-1-of-5.jpg', content: 'I love old schools!', user: @admin)

Car.create!(make: "Oldsmobile", model: 'Cutlass', year: '1989', img_url: 'https://photos.classiccars.com/cc-temp/listing/148/3924/26536990-1987-oldsmobile-cutlass-442-thumb.jpg', content: 'This is a classic! I have wanted to rebuild since I first rode in it.', user: @admin)

Car.create!(make: "Mercedes-Benz", model: 'S550 Coupe', year: '2020', img_url: 'https://cdn.carbuzz.com/gallery-images/840x560/550000/800/550812.jpg', content: 'This is a very classy car', user: @admin)

Car.create!(make: "BMW", model: '750i', year: '2020', img_url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-bmw-7-series-mmp-1-1599761470.jpg?crop=0.760xw:0.851xh;0.186xw,0.149xh&resize=640:*', content: 'This car screams luxury', user: @admin)

Car.create!(make: "Dodge", model: 'Challenger Hellcat', year: '2020', img_url: 'https://cdn.carbuzz.com/gallery-images/2020-dodge-challenger-srt-hellcat-carbuzz-468586.jpg', content: 'SPEED! SPEED!! SPEED!!!', user: @admin)

Car.create!(make: "Audi", model: 'SQ8', year: '2021', img_url: 'https://s1.cdn.autoevolution.com/images/news/gallery/abt-turns-2021-audi-sq8-into-641-hp-brute-rockets-to-62-mph-in-just-38-seconds_5.jpg', content: 'This is probably top 10 SUVs on the market in terms of style, speed and comfort!', user: @admin)

puts "#{Car.count} cars created"
