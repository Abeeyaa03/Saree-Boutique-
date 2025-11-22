import React from 'react';

const WEAVING_IMAGE = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=1000';
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1610189012906-44093a083f53?auto=format&fit=crop&q=80&w=800';

export const AboutSection: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (e.currentTarget.src !== PLACEHOLDER_IMAGE) {
      e.currentTarget.src = PLACEHOLDER_IMAGE;
    }
  };

  return (
    <section id="about" className="py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
            <div className="relative p-4 border-2 border-peach bg-gray-50">
              <img 
                src={WEAVING_IMAGE} 
                alt="Our Artisan Weaving" 
                onError={handleImageError}
                className="w-full h-auto shadow-lg object-cover aspect-[4/3] bg-gray-100"
              />
              <div className="absolute -bottom-6 -right-6 bg-peach w-24 h-24 -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 bg-peach w-24 h-24 -z-10 hidden md:block"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-rosegold font-bold tracking-widest text-sm uppercase mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
              Weaving Heritage <br/> Into Every Thread.
            </h2>
            <p className="text-gray-600 leading-loose mb-6 font-light">
              Founded in 1985, SareeSoul began as a humble loom in Varanasi. Today, we are a sanctuary for authentic handlooms. We believe a saree is not just a garment; it's a canvas of culture, six yards of sheer grace passed down through generations.
            </p>
            <p className="text-gray-600 leading-loose mb-8 font-light">
              We collaborate directly with artisans from Kanchipuram to Bengal, ensuring fair trade and preserving the dying art of hand-weaving. Every piece in our boutique tells a story—your story.
            </p>
            <img 
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHEBMQERIVFRAVFxkaFxUVGRgWFRUVFxgXGBgaFhsaHiogGBolHRgXITEiJikrLy4uFyA2ODMwNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAwEAAwEAAAAAAAAAAAAABQYHBAEDCAL/xABLEAABAwIEAgYDCgoIBwAAAAABAAIDBBEFBhIhBzETIkFRYYEycaEIFBUjQlJykZKxFiQzNGJjgoOywSVDU3OTosLRFzVkdLPD0//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBFA4pnPD8Jk6KerhZJ2tLhceu3LzU3DK2doe0hzXAEEG4IPIg9qD9oiICIiAiIgIiICIiAiIgIiICzTjxiElHQwsie9j5ZwNTHFpsGPdzB5XstLWR8dCaqowmmHJ85J83wxj+NyDU8OYYoYmkkkMaCTuSQ0XJ8V0rwBZeUBERAREQEREBERAREQEREFU4jZuOTaVk7YhK50gYGlxZ8lzr3APd7VZqWXp2Nfa2poNu64vZZf7oDr01Ez51T90b/91p8FoY23IADRcnkAAg/NfWR4fE+aV4ZEwEue42DQO1ZozFa/iS90dI59HhQJa6p5Tz2O4j+b28uXab3aOOaaTixXmGNxbg1K4ayLg1D+yx7b22+aDfmRbWaOlZQxtiiaGRsADWtFg0DkAgpOMZJosCweuigha0+9pXGR3WkLmsc4Oc478xfbZevgbVOqcHi1X6kkrRfsaHkgeoXt5KX4oVgosIrSflQujHiZRoH8S5ODtCaHBqa/OTXJt3SPc5v+UtQXRERAREQEREBERAREQEREBERAWR8RWmvzHhEPyWFrz6xIZP8A0ha4slrG+/s4RA7iGC4HcQx//wBEGtIiICIiAiIgIonM+YYMsU7qmpcRG2ws0Xe5x5Bo7T9wBJXTg2IjF4I6hrHsbI0ODZAGvAPLUATa4380HaiIgIiICIiDI+O7+mlwqAc3zk/5omf61IcXcclk6HB6M3qqogPtzbCb7G3LVY3PzWuUNxormU+K4T0jgI4z0jyexgmjcfZGbLu4SULsw1VVjtQOtK5zIAfksFgSPUGtZ+y7vQaDlbAY8t0sdLFyYOs7te8+k4+JKlkXJi2IR4VBJUSnTHG0ucfAD70GZcZat2NVFDg0Ju+aQPltza29m38AOkf+7HetSpKdtJGyNmzWNDR6miwWD8P81RVOI1WJVEc89ZIdMMEEZkdHGe0kkNaLaWi5+S49q1rK+dKXMj5IY+kjqI/Tgnb0crRyJtcgjccieY70FkREQEREBERAREQEREBERAREQFkuUvx3NWIyHfomFo8BaJv3tK1pZFwb/G8Uxmo53ltf6U05t9TW+xBrqIiAiIgLixjFYcFhfUTvDImC5J9gHeT2BevH8bgy9A+pqXhkTe3tJ7GtHa49yoFBg9RxGnZW17DFhjOtT0h9KXufN4W7O29uVy4PXl3DJuIVY3Fa5hZQxH8Upncn25SPHaL737SBbYdbUwLLwxoYAAAAOQGwA8F+kBERAREQEREHzzxyidi2NQU0e8hjhY0c+tI99v4gt2y/hTMDpYaWP0ImBo8SOZ9ZNz5rIsqVLM2Zpmqg0GKBrxGe8stE13jzcR6wtsJ07nkg48YxaHBYH1E7wyJguSfYAOZJ5ADmsJr8y1fFqtbQQXhodWpwG56Nh/KSnvvazeQJHPsieKeb5M61zaWm1Op2P0RMb/WyE6ddu0k7NvyG/atm4X5Lbk+kAcAaqWxmcN7HsY09zfablBYsCwOnwCIQ00TY2D5osSe9x5uPiVmmKj3lnGmczbpYRrt8q8c43/w2fZC1xZFUf0jnJgbyp4esfVC87ec7UGuoo/FMapsHANRPHEDy1uDb+q/NdNFVx18bZYntfG4Xa5pu0jwIQfjFKv3hBLNbV0cb32HM6Gl1vYsRydxIxLF8Qomyyx9DUyEGNrAA1ouLd45bG63WeITtcw+i4EH1EWK+YeHGGOosxQUzr6oppBv+rjm3/wAoKD6hREJsgIij8cxmDAIXVFTII4m8ybm5PIADdx8AgkEVcwLO9FjkvQRPc2fSHiOVj4nOYRcOaHgahY32VjQEUXmbHostUslVPfQwchbU5x2DW3IBJK5MmZrgzfT++IA5tnFrmP06mOG++kkWIIIKCfRFD4RmejxqR8VPUMkkj9JrTuADYkd4v2hBKVEnRMc7uBP1C6yv3PcV6asm7ZKgb99o2u+95Wg5urG0NDUyOcGgQv3JtuWkDzWX8GqrEIsOc2kpYXRNke4PmkczpnXALY9LTawFrna9vINnRVXAc8Q4g809Sx1HWN5wVFm6vGJ17SN9X1KYxLH6XC26pqiJg7LuFz3WHMn1IJJVvNucIMtgMN5ap/5Kmi60sh7Nh6LfE+1RlVjlfmQdHhsDqeI7Gsqmlu3fDCes4+LgApTLGTqfL5dL1pqt/wCUqZjrlee2xPoN8BZBBYNlCfHpmV+MkOkabw0bd4YB2avnv/n5Wv4Fl5RAREQEREBERAVX4lY9+DmGVE4NpC3RH/eSdUfVufJWhY5xjqBj1dS4WHfFsDp5rdgDXH+Br/thBF+5uptc1ZN81kbfVqc8/cwLQeL2LTYXhkggY90sxEQ0NLi0PvqJty6oIHiQq/7nei6HD55rW6Sew7y1jGj7y5asgyzhBw3/AAfaK2rb+NuHUYR+QaRvf9YeR7ht3rU0RB4cdIueSyXhL/TeJ4ninNrnmNh57E32PdoZGrVxXx/4AwyZzXWllBijtz1PBBI+i3UfJfrhdl78HsLhicLSyAySeDn7gfst0t8kGI4rWfCsOKYjP1pn1EcEGrcsaXPkcGd1o2MAt496+gMp0rcCwymjcbCKBuonss3U6/tXzdlCklx/EYsPv8Qaoyvb4M2cfsNLf2l9EcSa34NwitkB0noXNaf0n2Y23jdwQSGWsx0+ZojNSuLow4tJLXN3AB5OHcQsapMXho84PfpAY6R0Rd3PfGGah+2NP7RVz4UFuX8AFVIepaWYn9EE2Hrs32rN8LylJi+DVWLafxwVBmY4eloYfjdP7Re4f3YQfSCynjhiLqwU2EQkdLUOD3/oxsPVv4agXfuyrtkfMLcx4fDVXGottJ3NkZs/yuCfUVnuSqb8OsVr8TcT0LGuggPdqYW3HqYSf3qCS4A1M09DMySRz445tMRdcjToaSGk/Jub+F1x8QnfhJj+H4ZzhiAllHMXOpx1d3UjA/eqTyNheIZJp5aM0nvgB5dDLFJG1rrgD4zWQ5nLsB59vNSORcnzYbUT4jXvZJXzk+hcsiYbdVpIF+TRy5NHPckJLNmTIMydHJqfBUwkGKeKwey3Idzm+C91NHidOzQ59JM4cpCJIifFzBqF/UQrAiCmz5JdjczJ8Tn98CM3jpmN6OmY7vLSS6Q8xcntOy90+SW0tS6soJjSTv8AyjWtD6eXe/xke2/PdpHMq2Igq2K4FXY1GYZq1kULhZ/vWJzJXA7EB8kjtI9QX5g4d4dTMibFCY3xehLE90c3eSXtILr+KtaIM74m5ap48Mqp5DLNIyM9GZpXvDHnqhzGk6Q7fna6k+EUQiwaltyc1zvre5c/GqQx4NOAbanQt8jMy/sUtw5h6DCaFv8A08Z+toP80E7VUkdY3TLGx7e57Q4fUV6KPCKahN4aeGM97I2MPsC7UQERRuL49S4KNVTURRD9NwB8hzKCSRReCY7Fjeowtl0tNtUkUkbXfQLwNQ8QpRAREQEREBERB+ZZBE0uJsACSe4Dcr5+pak4jHjmOO21tdBAT+tLGAjb5giHmVp3GDGDhGEz6SQ+UCIEcwH7OPk3Us7zrRHLWWaGjG01RK18gG5LiHzEAdtndG3yQaPwhoveWD0uxBeHSG/P4xxd91lclxYJRDDqaCAco42M+y0D+S9uI6uhl0enodp+lpNvag4sEzHS48ZRSzNlMLtMmm/Vdv3jcbHcbbKVWVe55LTh8/8Aa9P1/wDDZp8rX9qlOKGb3UDBh1FeTEajqNayxdG13MnucRe1+W5OwQV6U/8AErHQ0b4dh537WySavaHOZb6MZ71rWIVjMOifNIQ2ONpc4nYBrRcqCyBlZmVKJkAsZT1pXD5UhAvbwHIeAVS4q4jJj9RBgNK49JMQ6ocOTIh1rOPlqI8Gj5SCB9z5SRVlTX1f9Y0ta0H5LZXPeT6zpA8iuzjvjb6/o8KpWukkAM8zYwXFrGAloNu4Au8m94U3g/D+qyhUTyYXND0M0YaY6jWSxzb6Xhzbl9iXGxtfVa/JTuSclty6ZJ5pDUV0xJlncLXvvpaOxv8AsByAADLqvMHv/AcOwmkIkq6izHsYQ4sax5B1gcgTb9kOPYtrwLCGYPSRUjRdkcYZ9Lbcn1m58176fDIKVxfHDGx55ua1oJ8wF1oMsbkTEMAFbTYfLEaOrvYSOcx9MXbEss0h3VJb2bBvdvdMj5ablSijpWkOcLue8C2qR3pH1cgPABT6ICIiAiIgIiICLmrsQiw5uuaRkbPnPcGj2qvnPENVtRw1FYe+Flot/wBbIWst6iUEDx9m6LBz4zRD6iXf6Vb8pM964dRtJtppoQSduUbbrLON9RX1WHMNTDDBAZ22Y2QyzFwjlPXIaGAWB5E9ivGE5Igq4IXVcs9UejZ1ZZHCIDQNuij0sI+kCgka/O1DRuMYm6aYc4qdrp5L9xbGDbzsub4axHEvzagELTf4ysfpPgRDHdx9Ti0qw0GHQ4c0MhiZGwCwaxoaLeS6kFV/BmqxD88xCVwPOKlApo/VqBMh+0FI4TlWiwg64aeNsh5yEapCe8vddxPmplEBERAREQEREBERBknHeXpZcLpj6Mk5J7tnRM+6QpxJHwtjeFUA9FhEjgOwatQv3C0RCsfFXKMuaKeJ1MWiqp364w42DuVxfsNw0j6KjMpZYrq3F5MXxBjYiIwyKIPDyDpay/V2AtrPfeTwQaWiIgpdVw3pzPJUU9RVUjpr9K2mkDGyXNzsWnSbk8rcypTLeTqPLZc+CL4519U0hMkzr87vdvY7beCsCr2cc3QZViDpLvmftFAzeSVx2AA7BfmfvOyD0Z+zczKlPcdeql6sEQ3c9+wBsN9IJF/WBzIXBw1yk/BGSVdWdWI1J1SuPNjSbhg8e0+O3IBcuTspz1tR8LYr1qw/kYfkUrOwAD5dj5b9pJWgoCIiAiIgIiICIiAonGcyUmCWFRURscfRZe8jvosF3O8gqFnbPUlTWfBlHM2mDTaorHjZlvSZELbv7L997crqVy2MGy/d8crZKh276iXXJNIe8uI2HgLBBJDM9ViX5lh8rmnlLVH3rHz7GkGQ/ZA8V5+BcSxL85rxCz+zo4ww27jLJqd9QHrXac40DedSwDxDh/JeIM64bUGza6nJ7ukaD9RKD8Yfkmho3CQw9NMP62oLp5PtSEkeSsLRp2HJc1LiMNZ+Sljf9BzXfcV1IMt90P8A8si/7kf+GZaPhG9PD/ds/hCz33QkXSYQ13zaiM/W2Rv+pXzLcvTUVK8cnQRH62NKCRREQEREBERAREQEREBERAREQEREBQFHlClpqt9eWukqnbCSVxeWDujB2YPUp9EAbIiICIiAiIgIiICIiDxYJZeUQLL1SU7JdnNaR4gH717UQQtZlKgrCS+jgLj8oRta77TQCuF+ThTnVSVlVTm4OkSGaLbs6ObUAPo29atCIMr4h4RjGJULqR0cFW0vY4SQ3hlGhwPWjcS11+Wzgr5k6nkpMPpIpWlkrII2uabXa5rACDbbsUwiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP/Z" 
              alt="Signature" 
              className="h-12 opacity-60 mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};