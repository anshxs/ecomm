import React, { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown, ChevronRight, Menu, Bell, Heart, Package, Tag, Zap, Smartphone, Home, Tv, ShoppingBag, Utensils, Plane } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FlipkartClone = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { icon: <Zap className="w-8 h-8" />, name: 'Top Offers', badge: 'NEW', color: 'from-yellow-400 to-orange-500' },
    { icon: <Smartphone className="w-8 h-8" />, name: 'Mobiles & Tablets', color: 'from-blue-400 to-blue-600' },
    { icon: <ShoppingBag className="w-8 h-8" />, name: 'Fashion', color: 'from-pink-400 to-purple-500' },
    { icon: <Tv className="w-8 h-8" />, name: 'Electronics', color: 'from-indigo-400 to-indigo-600' },
    { icon: <Home className="w-8 h-8" />, name: 'Home & Furniture', color: 'from-green-400 to-green-600' },
    { icon: <Package className="w-8 h-8" />, name: 'Appliances', color: 'from-red-400 to-red-600' },
    { icon: <Plane className="w-8 h-8" />, name: 'Travel', color: 'from-cyan-400 to-cyan-600' },
    { icon: <Utensils className="w-8 h-8" />, name: 'Grocery', color: 'from-lime-400 to-lime-600' },
  ];

  const topDeals = [
    { name: 'Gaming Laptop', price: '₹54,990', discount: '35% off', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop', rating: 4.5 },
    { name: 'Wireless Earbuds', price: '₹1,299', discount: '70% off', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop', rating: 4.3 },
    { name: 'Smart Watch', price: '₹2,499', discount: '60% off', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', rating: 4.4 },
    { name: '4K Monitor', price: '₹18,999', discount: '40% off', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop', rating: 4.6 },
    { name: 'Bluetooth Speaker', price: '₹999', discount: '75% off', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', rating: 4.2 },
    { name: 'Tablet', price: '₹12,999', discount: '45% off', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop', rating: 4.5 },
  ];

  const fashionDeals = [
    { name: 'Men Casual Shirts', price: '₹399', image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop' },
    { name: 'Women Kurtis', price: '₹499', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=300&h=400&fit=crop' },
    { name: 'Sneakers', price: '₹799', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop' },
    { name: 'Handbags', price: '₹599', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=400&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <div className="flex items-center space-x-1">
                <ShoppingCart className="w-6 h-6" />
                <div>
                  <h1 className="text-xl font-bold italic">Flipkart</h1>
                  <p className="text-xs italic -mt-1">Explore <span className="text-yellow-300 font-semibold">Plus</span></p>
                </div>
              </div>
              
              <div className="hidden lg:flex items-center bg-white rounded-sm px-4 py-2 w-[480px] shadow-md">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search for products, brands and more" 
                  className="flex-1 outline-none text-gray-700 text-sm"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white font-medium">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              
              <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Cart
              </Button>
              
              <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white hidden lg:flex">
                <Package className="w-5 h-5 mr-2" />
                Become a Seller
              </Button>
              
              <Button variant="ghost" className="text-white hover:bg-blue-700 hover:text-white p-2">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between overflow-x-auto space-x-8 scrollbar-hide">
              {categories.map((cat, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col items-center min-w-max cursor-pointer group"
                  onMouseEnter={() => setActiveCategory(cat.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-2 transform group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}>
                    {cat.icon}
                    {cat.badge && (
                      <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0">
                        {cat.badge}
                      </Badge>
                    )}
                  </div>
                  <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors text-center">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex items-center justify-between px-12 py-16">
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=350&fit=crop" 
                alt="Travel" 
                className="w-full max-w-md h-72 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1 text-center text-white">
              <h2 className="text-4xl font-bold mb-3 drop-shadow-lg">Save on International Flights!</h2>
              <p className="text-6xl font-extrabold mb-4 drop-shadow-lg">Up to ₹25,000 Off</p>
              <p className="text-xl mb-6 drop-shadow-md">Book your dream destination now</p>
              <div className="inline-block">
                <div className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg shadow-xl transform hover:scale-105 transition-transform">
                  CODE: FKINT
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center space-x-6">
              <div className="text-right">
                <div className="bg-yellow-400 text-gray-900 px-6 py-4 rounded-xl font-bold text-lg shadow-xl transform rotate-2">
                  <div>LOWEST</div>
                  <div>FARE</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Best Deals on Electronics</h2>
            <Button variant="outline" className="group">
              View All
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topDeals.map((deal, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-md">
                <div className="relative overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 right-3 bg-green-500 text-white font-bold shadow-lg">
                    {deal.discount}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{deal.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-green-600">{deal.price}</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium text-gray-600">{deal.rating}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="overflow-hidden shadow-xl border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Fashion's Top Deals</h3>
                <Button size="icon" variant="ghost" className="rounded-full bg-blue-100 hover:bg-blue-200">
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {fashionDeals.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <p className="text-white font-semibold text-sm">{item.name}</p>
                        <p className="text-yellow-400 font-bold">{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Winter Essentials</h3>
                <Button size="icon" variant="ghost" className="rounded-full bg-purple-100 hover:bg-purple-200">
                  <ChevronRight className="w-5 h-5 text-purple-600" />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=250&fit=crop" 
                    alt="Winter" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div>
                      <p className="text-white font-bold text-lg">Warm Jackets</p>
                      <p className="text-yellow-400 font-semibold">From ₹799</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=200&h=200&fit=crop" 
                      alt="Sweater" 
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=200&h=200&fit=crop" 
                      alt="Boots" 
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-green-50 to-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Designer Furniture</h3>
                <Button size="icon" variant="ghost" className="rounded-full bg-green-100 hover:bg-green-200">
                  <ChevronRight className="w-5 h-5 text-green-600" />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=250&fit=crop" 
                    alt="Sofa" 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-500 text-white font-bold shadow-lg">
                    50% OFF
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=200&h=200&fit=crop" 
                      alt="Chair" 
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg shadow-md group cursor-pointer">
                    <img 
                      src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200&h=200&fit=crop" 
                      alt="Table" 
                      className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="overflow-hidden shadow-2xl border-0">
          <div className="relative h-96">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&h=400&fit=crop" 
              alt="Fashion Banner" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
              <div className="text-white ml-16 max-w-md">
                <h2 className="text-5xl font-extrabold mb-4 leading-tight drop-shadow-2xl">Shop Your Fashion Needs</h2>
                <p className="text-xl mb-2 drop-shadow-lg">with Latest & Trendy Choices</p>
                <p className="text-3xl font-bold text-yellow-400 mb-6 drop-shadow-lg">Flat 60% OFF</p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold shadow-xl">
                  Shop Now
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">ABOUT</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">HELP</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Payments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">POLICY</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">SOCIAL</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-sm">
            <p>&copy; 2007-2025 Flipkart.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlipkartClone;